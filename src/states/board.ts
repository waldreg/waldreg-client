import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const boardDetailState = atom<any>({
  key: "boardDetailState",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
