import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFEEE4'
  },
});