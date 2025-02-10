import { View, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Input from "@/components/Input";

import CardResep from "@/components/CardResep";
import { Link } from "expo-router";

interface Resep {
  id: number;
  name: string;
  image: string;
}
const ResepPage = () => {
  const apiurl = "https://dummyjson.com/recipes";
  const [resep, setResep] = useState<Resep[]>([]);

  useEffect(() => {
    fetch(apiurl)
      .then((response) => response.json())
      .then((data: { recipes: Resep[] }) => setResep(data.recipes));
  }, []);
  return (
    <ScrollView>
      <View style={{ padding: 20, gap: 10, alignContent: "stretch" }}>
        <Input leftIcon="search" placeholder="Cari resep" />
        {resep.map((item) => (
          <Link href={"../resep/[id]"}>
            <TouchableOpacity key={item.id}>
              <CardResep gambar={item.image} judul={item.name} deskripsi="ini deskripsi makanan" mode="row" />
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
};

export default ResepPage;
