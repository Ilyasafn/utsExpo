import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import Input from "@/components/Input";
import { Octicons } from "@expo/vector-icons";

const [searchText, setSearchText] = useState(" ");

const ResepPage = () => {
  return (
    <View style={{ padding: 20 }}>
      <Input leftIcon="search" placeholder="Cari resep" 
      onChangeText={(text) => setSearchText(text)} value={searchText} />
      {searchText && (
        <TouchableOpacity onPress={() => setSearchText("")}>
          <Octicons name="x" size={24} color="#000" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ResepPage;
