import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const PokemonCard = ({ item, navigation }) => {
  const [pokeData, setPokeData] = useState(null);

  return (
    <View>
      <TouchableOpacity
        style={{
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate("Details")}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({});
