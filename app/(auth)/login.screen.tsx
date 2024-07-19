/** @format */

import { Text } from "@/components/Themed";
import { FC, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { useRecoilState } from "recoil";
import { Input } from "../components/input/input.component";
import { signInEmailPass } from "../config/sign-in-email-pass";
import { useAuth } from "../hooks/use-auth";
import { authTokenRecoilState } from "../recoil/auth-token.recoil";

export const LoginScreen: FC = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { logout } = useAuth();
  const [user, setUser] = useRecoilState(authTokenRecoilState);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     console.log(user);
  //   });
  // }, [auth]);

  return (
    <View style={styles.container}>
      {user !== null && user ? (
        <Text style={{ color: "black" }}>{user.user.email}</Text>
      ) : (
        <Text style={{ color: "black" }}>Usuário não logado</Text>
      )}
      <Input
        placeholder='Email'
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Input
        placeholder='Senha'
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button
        title='Login'
        onPress={() => signInEmailPass(email, password, setUser)}
      />
      <Button
        title='Logout'
        // onPress={() => signInEmailPass(email, password, setUserInfo)}
        onPress={logout}
      />
    </View>
  );
};

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
