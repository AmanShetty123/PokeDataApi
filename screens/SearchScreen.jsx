// SearchBar.js
import React, { useState, useEffect } from "react";
import { View, TextInput, FlatList, Text, StyleSheet } from "react-native";
import axios from "axios";

const SearchScreen = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  // Fetch Pokémon data from the API
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
        );
        setPokemonList(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemon();
  }, []);

  // Filter Pokémon based on the search phrase
  useEffect(() => {
    if (searchPhrase) {
      const filtered = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchPhrase.toLowerCase())
      );
      setFilteredPokemon(filtered);
    } else {
      setFilteredPokemon([]);
    }
  }, [searchPhrase, pokemonList]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Pokémon"
        value={searchPhrase}
        onChangeText={setSearchPhrase}
      />
      {filteredPokemon.length > 0 && (
        <FlatList
          data={filteredPokemon}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Text style={styles.suggestion}>{item.name}</Text>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  suggestion: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default SearchScreen;
