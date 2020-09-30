import React from 'react';
import Pic8 from '../assets/pics/pic8.jpg';
import {View, ImageBackground, Dimensions, StyleSheet} from 'react-native';
//import EStyleSheet, {absoluteFill} from 'react-native-extended-stylesheet';

export default () => {
  const windowHeight = Dimensions.get('window').height;
  const picHeight = windowHeight / 2.9;
  return (
    <View
      style={{
        height: picHeight,
      }}>
      <ImageBackground
        source={Pic8}
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          //position: 'relative',
        }}>
        <View style={styles.overlay} />
        <View style={styles.top}></View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  top: {
    position: 'absolute',
    top: 85,
    right: 49,
  },
});
