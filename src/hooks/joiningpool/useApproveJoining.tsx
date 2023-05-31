import { useMutation, useQueryClient } from "react-query";

import { joiningpoolUserKeys } from "../../types/joiningpoolKeys";
import { waldregAxios } from "../../apis/axios";

const approveJoining = async (userId: string) => {
  await waldregAxios.get(`/user/joiningpool/${userId}`);
};

const useApproveJoining = () => {
  const queryClient = useQueryClient();

  return useMutation(approveJoining, {
    onSuccess: () => {
      queryClient.invalidateQueries(joiningpoolUserKeys.all);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useApproveJoining;
