import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import Menu from './Screen/Menu';
import { NavigationContainer } from '@react-navigation/native';

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === 'string') {
      return image.prefetch();
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFont = (fonts) => fonts.map((font) => Font.loadAsync(font));

const userContext = React.createContext(null);

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadingFinish = () => {
    setIsReady(true);
  };

  const loadAssets = () => {
    const images = cacheImages([require('./assets/splash.png')]);
    const fonts = cacheFont([Ionicons.font]);
    return Promise.all([...images, ...fonts]);
  };

  return isReady ? (
    <>
      <userContext.Provider>
        <NavigationContainer>
          <Menu />
        </NavigationContainer>
      </userContext.Provider>
      <StatusBar barStyle="light-content" />
    </>
  ) : (
    <>
      <AppLoading startAsync={loadAssets} onFinish={loadingFinish} onError={console.warn} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
