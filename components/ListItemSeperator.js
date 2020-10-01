import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function ListItemSeperator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 2,
    backgroundColor: '#787878',
  },
});
