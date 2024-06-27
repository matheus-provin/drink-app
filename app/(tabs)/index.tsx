/** @format */

import { StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { Input } from "../components/input/input.component";

export default function TabOneScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const auth = getAuth();
  function aa() {
    signInWithEmailAndPassword(auth, "teste@firebase.com", "123456545");
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
  }, [auth]);

  return (
    <View style={styles.container}>
      <Input placeholder='Email' />
      {/* <TouchableOpacity
        onPress={() => {
          aa();
        }} 
      >
        <Text>Test</Text>
      </TouchableOpacity> */}
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
