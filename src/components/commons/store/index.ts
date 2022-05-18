import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const searchMenuTags = atom({
  key: "searchMenuTags",
  default: "",
});
export const searchMoodTags = atom({
  key: "searchMoodTags",
  default: [],
});
