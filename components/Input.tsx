import { View, TextInput, TextInputProps } from "react-native";
import React, { FC } from "react";
import { Octicons } from "@expo/vector-icons";

type InputProps = TextInputProps & {
  color?: string;
  rightIcon?: keyof typeof Octicons.glyphMap;
  leftIcon?: keyof typeof Octicons.glyphMap;
};

const Input: FC<InputProps> = ({ color, rightIcon, leftIcon, ...props }) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#eee",
        gap: 10,
        padding: 14,
        borderRadius: 8,
      }}>
      {leftIcon && <Octicons name={leftIcon} size={16} color={color} />}
      <TextInput {...props} style={{ flex: 1, color: "#B1B1B1" }} />
      {rightIcon && <Octicons name={rightIcon} size={16} color={color} />}
    </View>
  );
};

export default Input;
