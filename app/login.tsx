import { router } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";

import { useSession } from "../contexts/ctx";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";
import { COLORS } from "@/constants/Colors";

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <ScrollView>
      <View style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 40, gap: 30, top: 50 }}>
        <View style={{ gap: 30 }}>
          <Image source={require("../assets/images/food.png")} style={{ width: 200, height: 200 }} />
        </View>
        <View style={{ gap: 8 }}>
          <Title style={{ fontWeight: "bold" }}>Selamat Datang</Title>
          <Paragraph>Silakan login untuk masuk ke akun anda. Pastikan anda menggunakan akun yang telah terdaftar.</Paragraph>
        </View>
        <View style={{ gap: 10 }}>
          <Input leftIcon="mail" placeholder="username" />
          <Input leftIcon="lock" placeholder="password" rightIcon="eye" />
        </View>
        <View>
          <Button
            label="Login"
            color={COLORS.secondaryBtn}
            icon="check"
            onPress={() => {
              signIn();
              router.push("/");
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}
