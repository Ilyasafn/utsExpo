import { View, Text } from "react-native";
import React from "react";
import Button from "@/components/Button";
import { router } from "expo-router";
import { COLORS } from "@/constants/Colors";
import { useSession } from "@/contexts/ctx";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import Input from "@/components/Input";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Avatar from "@/components/Avatar";

const ProfilePage = () => {
  const { signOut } = useSession();

  return (
    <View style={{ padding: 40, gap: 20 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Avatar width={120} height={120} gambar={require("../../assets/images/image 7.png")} />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Title style={{ fontSize: 20 }}>username</Title>
        <Title style={{ fontSize: 14 }}>username@gmail.com</Title>
      </View>
      <View style={{ gap: 10 }}>
        <Input leftIcon="mail" placeholder="username@gmail.com" />
        <Input leftIcon="lock" placeholder="Password" rightIcon="eye" />
        <Paragraph style={{ fontSize: 14 }}>Isi password jika ingin mengubah password</Paragraph>
      </View>
      <Button label="Update profile" color={COLORS.secondaryBtn} icon="check" />
      <View>
        <Title style={{ fontSize: 14 }}>Tentang aplikasi</Title>
        <Paragraph style={{ fontSize: 12 }}>Aplikasi ini dibuat sebagai syarat untuk mendapatkan nilai ujian tengah semester matakulah mobile programming. aplikasi ini dibuat dengan menggunakan react native expo</Paragraph>
      </View>
      <Button
        icon="sign-out"
        label="Keluar"
        color={COLORS.errorBtn}
        onPress={() => {
          signOut();
          router.push("/login");
        }}
      />
    </View>
  );
};

export default ProfilePage;
