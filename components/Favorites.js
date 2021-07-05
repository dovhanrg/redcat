import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MovieList from './MovieList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

const Favorites = ({ state }) => {
  const navigation = useNavigation();

  const [filter, setFilter] = useState('');

  const onMoviePress = (item) => {
    navigation.navigate('MovieScreen', {
      item,
      buttonTitle: 'Remove from Favorites',
    });
  };

  const handleChangeText = (val) => {
    setFilter(val);
  };

  return (
    <View style={styles.container}>
      <Text>Favorites</Text>
      <TextInput
        style={styles.input}
        placeholder="Try to search"
        onChangeText={handleChangeText}
      />
      {state?.favorites?.length > 0 && (
        <MovieList
          onPress={onMoviePress}
          data={state.favorites.filter((movie) => movie.title.includes(filter))}
        />
      )}
    </View>
  );
};

export default Favorites;
