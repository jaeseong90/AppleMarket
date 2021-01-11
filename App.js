import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import AppLoading from 'expo';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isReady, setIsReady] = useState(true);

  const loadingFinish = () => {
    setIsReady(true);
  };

  return (
    <View style={styles.container}>
      <Text>aaaaaa</Text>
      <StatusBar style="auto" />
    </View>
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
