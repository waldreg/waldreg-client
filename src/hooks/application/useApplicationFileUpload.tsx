import { useMutation, useQueryClient } from "react-query";

import { applicationFileKeys } from "../../types/applicationKeys";
import { waldregAxios as axios } from "./../../apis/axios";

async function applicationFileUpload(logo: any): Promise<void> {
  await axios.post(`/application/setting/logo`, logo, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

interface UseApplicationFileUpload {
  mutate: () => void;
}

export function useApplicationFileUpload(logo: any): UseApplicationFileUpload {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => applicationFileUpload(logo), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(applicationFileKeys.all);
    },
  });
  return { mutate };
}
