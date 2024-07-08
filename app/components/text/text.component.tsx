import React from "react";
import { Text, TextProps } from "react-native";

export interface InternalTextProps extends TextProps {
  textStyle?: any;
  light?: boolean;
  medium?: boolean;
  bold?: boolean;
  black?: boolean;
  children?: any;
  numberOfLines?: number;
}

export const TextComponent = ({
  style,
  light,
  medium,
  bold,
  black,
  numberOfLines,
  ...props
}: InternalTextProps) => {
  return (
    <Text
      ellipsizeMode="tail"
      numberOfLines={numberOfLines}
      {...props}
      style={[style]}
    >
      {props.children}
    </Text>
  );
};
