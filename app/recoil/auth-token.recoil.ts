/** @format */

import ReactNativeRecoilPersist from "react-native-recoil-persist";
import { atom } from "recoil";

interface AuthState {
  token: string;
}

export const authTokenRecoilState = atom<AuthState>({
  key: "authState",
  default: { token: "" },
  effects_UNSTABLE: [ReactNativeRecoilPersist.persistAtom],
});
