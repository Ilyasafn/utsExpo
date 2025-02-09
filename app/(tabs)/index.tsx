import { ScrollView, TouchableOpacity, View } from "react-native";
import { useSession } from "../../contexts/ctx";
import { router } from "expo-router";
import Button from "@/components/Button";
import { COLORS } from "@/constants/Colors";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import CardResep from "@/components/CardResep";
import { useQuery } from "@tanstack/react-query";

export default function Index() {
  const resepData = [
    {
      id: 1,
      judul: "Nasi Goreng Spesial",
      deskripsi: "Nasi goreng dengan bumbu rempah pilihan.",
    },
    {
      id: 2,
      judul: "Sate Ayam Madura",
      deskripsi: "Sate ayam dengan bumbu kacang khas Madura.",
    },
  ];

  return (
    <ScrollView>
      <View style={{ padding: 20, gap: 10 }}>
        <Paragraph style={{ fontWeight: "bold", fontSize: 14 }} color="#000">
          Rekomendasi resep hari ini
        </Paragraph>
        {resepData.map((resep) => (
          <TouchableOpacity>
            <CardResep key={(resep.id = 1)} gambar={require("../../assets/images/food.png")} judul={resep.judul} deskripsi={resep.deskripsi} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ padding: 20, gap: 10 }}>
        {resepData.map((resep) => (
          <TouchableOpacity>
            <CardResep key={resep.id} gambar={require("../../assets/images/food.png")} judul={resep.judul} deskripsi={resep.deskripsi} mode="row" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
