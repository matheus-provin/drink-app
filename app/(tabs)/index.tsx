/** @format */

import { Button, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { UserCredential, getAuth } from "firebase/auth";
import { useState } from "react";
import { Input } from "../components/input/input.component";
import { signInEmailPass } from "../config/sign-in-email-pass";
import { useAuth } from "../hooks/use-auth";

export default function TabOneScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userInfo, setUserInfo] = useState<UserCredential | null>(null);

  const auth = getAuth();

  const { logout } = useAuth();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     console.log(user);
  //   });
  // }, [auth]);

  return (
    <View style={styles.container}>
      {userInfo !== null && userInfo ? (
        <Text style={{ color: "black" }}>{userInfo.user.email}</Text>
      ) : null}
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
        onPress={() => signInEmailPass(email, password, setUserInfo)}
      />
      <Button
        title='Logout'
        // onPress={() => signInEmailPass(email, password, setUserInfo)}
        onPress={logout}
      />
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
