import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { places } from '../data/places'; // Importa os dados locais

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pontos Turísticos</Text>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id.toString()} // Usar o id único de cada ponto
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Detail', { place: item })}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: { padding: 15, marginBottom: 10, backgroundColor: '#f9f9f9', borderRadius: 8 },
  itemText: { fontSize: 18, color: '#333' },
});

export default HomeScreen;



