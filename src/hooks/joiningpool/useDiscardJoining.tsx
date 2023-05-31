import { useMutation, useQueryClient } from "react-query";

import { JoiningpoolUser } from "../../interfaces/joiningpoolUser";
import { joiningpoolKeys } from "../../types/joiningpoolKeys";
import { waldregAxios } from "../../apis/axios";

const discardJoining = async (user: JoiningpoolUser) => {
  await waldregAxios.delete(`/user/joiningpool/${user.user_id}`);
};

const useDiscardJoining = () => {
  const queryClient = useQueryClient();
  return useMutation(discardJoining, {
    onSuccess: () => {
      queryClient.invalidateQueries(joiningpoolKeys.all);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useDiscardJoining;
