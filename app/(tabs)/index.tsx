import { ScrollView, TouchableOpacity, View } from "react-native";
import Paragraph from "@/components/Paragraph";
import CardResep from "@/components/CardResep";
import { useEffect, useState } from "react";
import { router } from "expo-router";

interface Resep {
  id: number;
  name: string;
  image: string;
}

export default function Index() {
  const apiurl = "https://dummyjson.com/recipes";
  const [resep, setResep] = useState<Resep[]>([]);

  useEffect(() => {
    fetch(apiurl)
      .then((response) => response.json())
      .then((data: { recipes: Resep[] }) => setResep(data.recipes));
  }, []);

  // const resepData = [
  //   {
  //     id: 1,
  //     judul: "Nasi Goreng Spesial",
  //     deskripsi: "Nasi goreng dengan bumbu rempah pilihan.",
  //   },
  //   {
  //     id: 2,
  //     judul: "Sate Ayam Madura",
  //     deskripsi: "Sate ayam dengan bumbu kacang khas Madura.",
  //   },
  // ];

  return (
    <ScrollView>
      <View style={{ padding: 20, gap: 10 }}>
        <Paragraph style={{ fontWeight: "bold", fontSize: 14 }} color="#000">
          Rekomendasi resep hari ini
        </Paragraph>
        {resep.map((item) => (
          <TouchableOpacity
            onPress={() => {
              router.push("/resep/[id]");
            }}
            key={item.id}>
            <CardResep gambar={item.image} judul={item.name} deskripsi="ini deskripsi makanan" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
