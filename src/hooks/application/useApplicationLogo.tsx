import { applicationLogoKeys } from "../../types/applicationKeys";
import { waldregAxios as axios } from "../../apis/axios";
import { useQuery } from "react-query";

async function getApplicationLogo(): Promise<string> {
  const { data } = await axios.get(`/application/setting/logo`);
  return data;
}

export function useApplicationLogo() {
  const { data: applicationLogo } = useQuery<string>(
    applicationLogoKeys.all,
    getApplicationLogo
  );
  return { applicationLogo };
}
