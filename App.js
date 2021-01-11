import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === 'string') {
      return image.prefetch();
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFont = (fonts) => fonts.map((font) => Font.loadAsync(font));

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
    <View style={styles.container}>
      <Text>asd</Text>
      <StatusBar style="auto" />
    </View>
  ) : (
    <AppLoading startAsync={loadAssets} onFinish={loadingFinish} onError={console.warn} />
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
