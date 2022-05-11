import { atom } from "recoil";

// AccessToken
export const AccessTokenState = atom({
  key: "AccessToken",
  default: "",
});

export const WatchProductState = atom({
  key: "WatchProduct",
  default: [],
});
