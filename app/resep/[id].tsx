import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Input from "@/components/Input";
import { Link, useGlobalSearchParams } from "expo-router";
import CardResep from "@/components/CardResep";
import Avatar from "@/components/Avatar";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";

interface Resep {
  id: number;
  name: string;
  image: string;
}

const ResepDetail = () => {
  const { productId } = useGlobalSearchParams();
  const apiurl = "https://dummyjson.com/recipes" + productId;
  const [resep, setResep] = useState<Resep[]>([]);

  useEffect(() => {
    fetch(apiurl)
      .then((response) => response.json())
      .then((data: { recipes: Resep[] }) => setResep(data.recipes));
  }, []);
  return (
    <View style={{ padding: 20 }}>
      {resep.map((item) => (
        <View>
          <Avatar gambar={{ uri: item.image }} />
          <Title>{item.name}</Title>
          <Title>Detail resep</Title>
          <Paragraph>ini deskripsi resep</Paragraph>
          <Title>Bahan Pembuatan</Title>
          <Title>Cara Pembuatan</Title>
        </View>
      ))}
    </View>
  );
};

export default ResepDetail;
