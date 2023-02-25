import { useMutation, useQueryClient } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { userKeys } from '../../types/userKeys';

const editUserCharacter = async ({
  id,
  character,
}: {
  id: number;
  character: string;
}) => {
  await waldregAxios.put(`/user/character/${id}`, {
    character: character,
  });
};

const useEditUserCharacter = () => {
  const queryClient = useQueryClient();
  return useMutation(editUserCharacter, {
    onSuccess: () => {
      queryClient.invalidateQueries(userKeys.all);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useEditUserCharacter;
