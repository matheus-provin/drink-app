/** @format */

import React, { FC } from "react";
import { StyleSheet, TextInput } from "react-native";
interface InputProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: boolean;
}
export const Input: FC<InputProps> = ({
  placeholder = "",
  onChangeText,
  value,
  error = false,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={error ? styles.inputError : styles.input}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    padding: 12,
    width: "100%",
    color: "black",
    borderRadius: 8,
    fontSize: 16,
    borderColor: "blue",
    borderWidth: 1,
  },
  inputError: {
    backgroundColor: "white",
    padding: 12,
    width: "100%",
    color: "black",
    borderRadius: 8,
    fontSize: 16,
    borderColor: "red",
    borderWidth: 1,
  },
});
