import React, { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function DetailsScreen({}) {
  const [data, setData] = useState(null);
  const route = useRoute();
  const url = route.params.url;
  const fetchData = async () => {
    const data = await fetch(url);
    const data1 = await data.json();
    console.log(data1.abilities);
    setData(data1.abilities);
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details Screen</Text>
      <Button title="click" onPress={fetchData} />
    </View>
  );
}
