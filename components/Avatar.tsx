import { View, Text, Image, ImageSourcePropType } from "react-native";
import React, { FC } from "react";
import { COLORS } from "@/constants/Colors";

interface AvatarProps {
  gambar?: string | ImageSourcePropType;
  width?: number;
  height?: number;
}

const Avatar: FC<AvatarProps> = ({ gambar, width, height }) => {
  return (
    <View>
      {gambar && (
        <Image
          source={typeof gambar === "string" ? { uri: gambar } : gambar}
          style={{ borderRadius: 120, backgroundColor: COLORS.secondaryBtn, width: width, height: height }} // Cek tipe gambar
        />
      )}
    </View>
  );
};

export default Avatar;
