import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function () {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Your Cart Is Empty!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 20,
  },
});
