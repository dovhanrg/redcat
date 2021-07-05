import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from './components/Favorites';
import Home from './components/Home';
import MovieScreen from './components/MovieScreen';

const HomeStack = createStackNavigator();
const FavoritesStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen({ handleUpdateState, state }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={'Home'} component={Home} />
      <HomeStack.Screen
        name={'MovieScreen'}
        children={() => (
          <MovieScreen state={state} handleUpdateState={handleUpdateState} />
        )}
      />
    </HomeStack.Navigator>
  );
}

function FavoritesStackScreen({ handleUpdateState, state }) {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen
        name={'Favorites'}
        children={() => (
          <Favorites state={state} handleUpdateState={handleUpdateState} />
        )}
      />
      <FavoritesStack.Screen
        name={'MovieScreen'}
        children={() => (
          <MovieScreen state={state} handleUpdateState={handleUpdateState} />
        )}
      />
    </FavoritesStack.Navigator>
  );
}

export default function App() {
  const [state, setState] = useState({});

  const handleUpdateState = (newState) => {
    setState({ ...newState });
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          children={() => (
            <HomeStackScreen
              state={state}
              handleUpdateState={handleUpdateState}
            />
          )}
        />
        <Tab.Screen
          name="Favorites"
          children={() => (
            <FavoritesStackScreen
              state={state}
              handleUpdateState={handleUpdateState}
            />
          )}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
