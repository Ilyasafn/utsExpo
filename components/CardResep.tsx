import { View, Image, Text, ImageSourcePropType } from "react-native";
import React, { FC } from "react";

interface ResepProps {
  gambar?: string | ImageSourcePropType;
  judul: string;
  deskripsi?: string;
  mode?: "column" | "row";
}

const CardResep: FC<ResepProps> = ({ gambar, judul, deskripsi, mode = "column" }) => {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flex: mode === "column" ? 1 : 0,
        flexDirection: mode === "column" ? "column" : "row",
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
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 14 }}>{judul}</Text>
        <Text style={{ fontSize: 12, color: "#B1B1B1" }}>{deskripsi}</Text>
      </View>
    </View>
  );
};

export default CardResep;
