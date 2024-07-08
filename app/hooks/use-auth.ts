/** @format */

// auth/authService.ts
import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { useRecoilState } from "recoil";
import { authTokenRecoilState } from "../recoil/auth-token.recoil";

export const useAuth = () => {
  const [user, setUser] = useRecoilState(authTokenRecoilState);
  const auth = getAuth();

  const login = async (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken();
      setUser({ token });
      return userCredential;
    } catch (error) {
      console.error("Falha login", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
      setUser({ token: "" });
    } catch (error) {
      console.error("Erro logout", error);
    }
  };

  return { user, login, logout };
};
