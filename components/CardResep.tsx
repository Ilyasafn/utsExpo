import { View, Image, Text, ImageSourcePropType } from "react-native";
import React, { FC } from "react";

interface ResepProps {
  gambar?: string | ImageSourcePropType;
  name: string;
  description?: string;
  steps?: string[];
  ingredients?: string[];
  mode?: "column" | "row";
}

const CardResep: FC<ResepProps> = ({ gambar, name, description, steps, ingredients, mode = "column" }) => {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flex: 1,
        flexDirection: mode === "column" ? "column" : "row",
        backgroundColor: "white",
        shadowColor: "#000",
        padding: mode === "column" ? 20 : 12,
        gap: 8,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: "#D7D7D7",
      }}>
      {gambar && (
        <Image
          source={typeof gambar === "string" ? { uri: gambar } : gambar}
          style={{
            alignSelf: "stretch",
            width: mode === "column" ? "100%" : 60,
            height: mode === "column" ? 120 : 60,
            borderRadius: 8,
          }}
        />
      )}
      <View
        style={{
          flex: 1,
        }}>
        <View style={{ gap: 8 }}>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>{name}</Text>
          <Text style={{ fontSize: 12, color: "#B1B1B1" }}>{description}</Text>
        </View>
        <Text style={{ fontSize: 12, color: "#B1B1B1" }}>{steps}</Text>
        <Text style={{ fontSize: 12, color: "#B1B1B1" }}>{ingredients}</Text>
      </View>
    </View>
  );
};

export default CardResep;
