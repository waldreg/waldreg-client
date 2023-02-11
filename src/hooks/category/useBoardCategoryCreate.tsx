import { useMutation } from "react-query";
import { waldregAxios as axios } from "./../../apis/axios";

async function boardCategoryCreate(name: string): Promise<void> {
  await axios.post(`/category`, {
    category_name: name,
  });
}

interface UseBoardCategoryCreate {
  mutate: () => void;
}

export function useBoardCategoryCreate(name: string): UseBoardCategoryCreate {
  const { mutate } = useMutation(() => boardCategoryCreate(name));
  return { mutate };
}
