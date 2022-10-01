import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import IAmPoor from './components/IAmPoor';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <IAmPoor />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
