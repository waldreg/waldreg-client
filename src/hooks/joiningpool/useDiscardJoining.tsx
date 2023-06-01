import { useMutation, useQueryClient } from "react-query";

import { joiningpoolUserKeys } from "../../types/joiningpoolKeys";
import { waldregAxios } from "../../apis/axios";

const discardJoining = async (userId: string) => {
  await waldregAxios.delete(`/user/joiningpool/${userId}`);
};

const useDiscardJoining = () => {
  const queryClient = useQueryClient();
  return useMutation(discardJoining, {
    onSuccess: () => {
      queryClient.invalidateQueries(joiningpoolUserKeys.all);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useDiscardJoining;
