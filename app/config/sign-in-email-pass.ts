/** @format */

import {
  Auth,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";

async function signInService(
  email: string,
  password: string,
  auth: Auth,
  setUser: (arg0: UserCredential) => void
) {
  try {
    signInWithEmailAndPassword(auth, email, password)
      .then((user: UserCredential) => {
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  } catch (error) {
    return "Erro";
  }
}

export async function signInEmailPass(
  email: string,
  password: string,
  auth: Auth,
  setUser: (arg0: UserCredential) => void
) {
  const response = await signInService(email, password, auth, setUser);

  if (response) return response;

  return "Erro";
}
