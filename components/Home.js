import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MovieList from './MovieList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45,
  },
});

const Home = ({ navigation }) => {
  const [data, setData] = useState(null);

  const onMoviePress = (item) => {
    navigation.navigate('MovieScreen', {
      item,
      buttonTitle: 'Add to Favorites',
      update: 'ADD',
    });
  };

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=42e85409fbcdfd2ff4c6c4ca92598ed2&language=en-US&page=1',
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <View style={styles.container}>
      {data && <MovieList data={data.results} onPress={onMoviePress} />}
    </View>
  );
};

export default Home;
