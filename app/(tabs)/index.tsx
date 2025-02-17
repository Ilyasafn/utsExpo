import { ScrollView, TouchableOpacity, View } from "react-native";
import Paragraph from "@/components/Paragraph";
import CardResep from "@/components/CardResep";
import { FC, useEffect, useState } from "react";
import { router } from "expo-router";
import { Recipes } from "@/api/resep";

interface Resep {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  steps: string[];
}

export default function Index() {
  const [recipes, setRecipes] = useState<Resep[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await Recipes();
      setRecipes(data);
    }
    fetchData();
  }, []);

  return (
    <ScrollView>
      <View style={{ padding: 20, gap: 10 }}>
        <Paragraph style={{ fontWeight: "bold", fontSize: 14 }} color="#000">
          Rekomendasi resep hari ini
        </Paragraph>
        {recipes.map((item) => (
          <TouchableOpacity
            onPress={() => {
              router.push(`/resep/${item.id}`);
            }}
            key={item.id}>
            <CardResep name={item.name} description={item.description} gambar={require("@/assets/images/image 7.png")} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
