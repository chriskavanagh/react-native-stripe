import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function () {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Swipe Left & Tap To Delete Item</Text>
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
    fontStyle: 'italic',
    color: '#fff',
  },
});
