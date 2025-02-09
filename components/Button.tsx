import { View, Text, TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import React, { FC } from "react";
import { COLORS } from "@/constants/Colors";

interface CustomButton {
  label: string;
  color?: string;
  icon?: keyof (typeof Octicons)["glyphMap"];
  mode?: "primary" | "secondary";
  onPress?: () => void;
}

const Button: FC<CustomButton> = (props) => {
  const { label, color, icon, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color,
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 8,
      }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}>
        {icon && <Octicons name={icon} size={16} style={{ marginRight: 10, color: "white" }} />}
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Nunito-Bold",
            textAlign: "center",
            color: "white",
          }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
