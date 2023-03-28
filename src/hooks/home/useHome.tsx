import { useQuery } from "react-query";
import { Home } from "../../interfaces/home";

import { waldregAxios as axios } from "./../../apis/axios";
import { homeKeys } from "./../../types/homeKeys";

async function getHome(): Promise<Home> {
  const { data } = await axios.get(`/application/home`);
  return data;
}

interface UseHome {
  home?: Home;
}

export function useHome(): UseHome {
  const { data: home } = useQuery<Home>(homeKeys.all, getHome);
  return { home };
}
