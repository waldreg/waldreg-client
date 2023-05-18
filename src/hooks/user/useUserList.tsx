import { useInfiniteQuery } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { userKeys } from '../../types/userKeys';

const useUserList = () => {
  const getUserList = async (startIdx: number, endIdx: number) => {
    const response = await waldregAxios.get(
      `/users?from=${startIdx}&to=${endIdx}`
    );
    return { data: response.data, idx: endIdx };
  };

  const {
    data: userList,
    fetchNextPage,
    hasNextPage,
    isFetched,
  } = useInfiniteQuery(
    userKeys.search,
    ({ pageParam = 1 }) => getUserList(pageParam, pageParam + 9),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.data.max_idx > lastPage.idx + 1
          ? lastPage.idx + 1
          : undefined;
      },
    }
  );

  return { userList, fetchNextPage, hasNextPage, isFetched };
};

export default useUserList;
