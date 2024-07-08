/** @format */

import { UserCredential } from "firebase/auth";
import ReactNativeRecoilPersist from "react-native-recoil-persist";
import { atom } from "recoil";

export const authTokenRecoilState = atom<UserCredential | null>({
  key: "authState",
  default: null,
  effects_UNSTABLE: [ReactNativeRecoilPersist.persistAtom],
});
