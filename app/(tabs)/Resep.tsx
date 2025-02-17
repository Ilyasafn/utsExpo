import { View, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Input from "@/components/Input";
import CardResep from "@/components/CardResep";
import { Link, router } from "expo-router";
import { Recipes } from "@/api/resep";

interface Resep {
  id: number;
  name: string;
  description: string;
  steps: string[];
  ingredients: string[];
  image: string;
}
const ResepPage = () => {
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
        <Input leftIcon="search" placeholder="Cari resep" />
        {recipes.map((item) => (
          <TouchableOpacity
            onPress={() => {
              router.push(`/resep/${item.id}`);
            }}
            key={item.id}>
            <CardResep name={item.name} description={item.description} gambar={require("@/assets/images/image 7.png")} mode="row" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ResepPage;
