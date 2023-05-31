import { useMutation, useQueryClient } from "react-query";

import { JoiningpoolUser } from "../../interfaces/joiningpoolUser";
import { joiningpoolKeys } from "../../types/joiningpoolKeys";
import { waldregAxios } from "../../apis/axios";

const approveJoining = async (user: JoiningpoolUser) => {
  await waldregAxios.get(`/user/joiningpool/${user.user_id}`);
};

const useApproveJoining = () => {
  const queryClient = useQueryClient();
  return useMutation(approveJoining, {
    onSuccess: () => {
      queryClient.invalidateQueries(joiningpoolKeys.all);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useApproveJoining;
