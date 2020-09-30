import React from 'react';
import HomeImage from '../components/HomeImage';
import HomeButton from '../components/HomeButton';
import Icon from 'react-native-vector-icons/Zocial';
//import EStyleSheet from 'react-native-extended-stylesheet';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

function MyButton({navigation}) {
  return (
    <View style={styles.mybuttonView}>
      <TouchableOpacity
        onPress={() => console.log('Facebook')}
        style={styles.mybutton}>
        <View style={styles.wrapper}>
          <Icon name="facebook" size={25} color="#f96332" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => console.log('Twitter')}
        style={styles.mybutton}>
        <View style={styles.wrapper}>
          <Icon name="twitter" size={25} color="#f96332" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => console.log('Instagram')}
        style={styles.mybutton}>
        <View style={styles.wrapper}>
          <Icon name="instagram" size={25} color="#f96332" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default function HomePage({navigation}) {
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: '#303030'}}>
      <HomeImage />
      <MyButton />
      <View style={styles.imgContainer}>
        <Text style={styles.titleTxt}>Chinese/Japanese Cuisine</Text>
        <Text style={styles.txt}>Saki, Beer, Wine, Mixed Drinks</Text>
        <Text style={styles.txt}>Sushi Bar</Text>
        <HomeButton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: 90,
    height: 90,
    padding: 2,
  },
  titleTxt: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'nunito-bold',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  txt: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'nunito-bold',
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 10,
  },
  imgContainer: {
    padding: 20,
    borderRadius: 15,
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconStyle: {
    right: 3,
    position: 'relative',
  },

  mybuttonView: {
    position: 'relative',
    bottom: 44,
    zIndex: 1000,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
  },
  wrapper: {
    paddingHorizontal: 30,
    borderColor: 'gray',
    borderWidth: 2,
    borderStyle: 'solid',
    paddingVertical: 7,
  },
});
