import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import { getImageSourceW300 } from './utils';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 20,
  },
  titleContainer: { alignItems: 'center' },
  posterImage: { width: 300, height: 400 },
});

const MovieList = ({ onPress, data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return (
          <TouchableWithoutFeedback onPress={() => onPress(item)}>
            <View style={styles.container}>
              <View style={styles.titleContainer}>
                <Text>Title: {item.title}</Text>
              </View>
              <Image
                style={styles.posterImage}
                source={{ uri: getImageSourceW300(item.poster_path) }}
              />
            </View>
          </TouchableWithoutFeedback>
        );
      }}
    />
  );
};

export default MovieList;
