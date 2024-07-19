/** @format */

import { Button, StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import { useAuth } from "../hooks/use-auth";

export default function TabTwoScreen() {
  const { logout } = useAuth();
  return (
    <View style={styles.container}>
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
