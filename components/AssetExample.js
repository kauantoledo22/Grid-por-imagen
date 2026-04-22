import React from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native';

// Pegamos a largura da tela para cálculos precisos se necessário
const { width } = Dimensions.get('window');

export default function PhotoGrid() {
  const images = [
    { id: '1', uri: 'https://picsum.photos/200' },
    { id: '2', uri: 'https://picsum.photos/201' },
    { id: '3', uri: 'https://picsum.photos/202' },
    { id: '4', uri: 'https://picsum.photos/203' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {images.map((item) => (
          <View key={item.id} style={styles.item}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
  item: {
    width: '50%', // Define 2 itens por linha
    padding: 5,   // Espaçamento entre as imagens
    aspectRatio: 1, // Mantém a imagem quadrada
  },
  image: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
});
