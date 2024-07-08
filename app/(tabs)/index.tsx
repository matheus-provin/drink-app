/** @format */

import { Button, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { UserCredential, getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Input } from "../components/input/input.component";
import { signInEmailPass } from "../modules/authentication/sign-in-email-pass";

export default function TabOneScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userInfo, setUserInfo] = useState<UserCredential | null>(null);

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
  }, [auth]);

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
