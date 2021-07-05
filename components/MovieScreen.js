import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Button from './Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginTop: 40,
  },
  titleText: {
    margin: 10,
  },
  posterImage: {
    width: 300,
    height: 400,
  },
  textContainer: { margin: 10 },
});

const MovieScreen = ({ state, handleUpdateState }) => {
  const route = useRoute();

  const { item, buttonTitle, update } = route.params;
  const currentFavorites = state.favorites || [];

  const onUpdateState = () => {
    if (update === 'ADD') {
      handleUpdateState({ ...state, favorites: [...currentFavorites, item] });
    } else {
      handleUpdateState({
        ...state,
        favorites: currentFavorites.filter(
          (movie) => movie.title !== item.title,
        ),
      });
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Button title={buttonTitle} onPress={onUpdateState} />
        <Text style={styles.titleText}>{item.title}</Text>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w300${item.poster_path}` }}
          style={styles.posterImage}
        />
        <View style={styles.textContainer}>
          <Text>Overview: {item.overview}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Release date: {item.release_date}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Popularity: {item.popularity}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
