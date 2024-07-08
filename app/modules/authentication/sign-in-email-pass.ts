/** @format */

import {
  UserCredential,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

export async function signInEmailPass(
  email: string,
  password: string,
  setUserInfo: (arg0: UserCredential) => void
) {
  const auth = getAuth();

  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
    setUserInfo(response);
  } catch (error) {
    console.log(error);
  }
}
