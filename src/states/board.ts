import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const boardIdState = atom({
  key: "boardIdState",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const boardCategoryState = atom({
  key: "boardCategoryState",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const settingFromState = atom({
  key: "settingFromState",
  default: false,
});

export const settingCategoryId = atom({
  key: "settingCategoryId",
  default: 1,
});

export const settingCategoryName = atom({
  key: "settingCategoryName",
  default: "",
});
