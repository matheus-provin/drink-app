/** @format */

import { Button, StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import { getAuth } from "firebase/auth";
import { useRecoilState } from "recoil";
import { authTokenRecoilState } from "../recoil/auth-token.recoil";

export default function TabTwoScreen() {
  const [user, setUser] = useRecoilState(authTokenRecoilState);
  async function logout() {
    const auth = getAuth();
    try {
      // await signOut(auth);
      auth.signOut();
      alert("Deslogado com sucesso");
      setUser(null);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  return (
    <View style={styles.container}>
      <Button title='Logout' onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
