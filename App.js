import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {decode, encode} from 'base-64';
import firebase from './Firebase/config';
//import { NavigationContainer } from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
//import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
//import TabNavigator from "../Routes/TabNavigator";
import {NavigationContainer} from '@react-navigation/native';
//import TabNavigator from './Routes/TabNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import Home from './Home';

//Firebase won't work without this.
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  //const dispatch = useDispatch();

  /* const onFooterLinkPress = () => {
    navigation.navigate('Registration');
  }; */

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    //console.log(usersRef);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log(user.email);
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
  }, []);

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Registration" component={RegistrationScreen} />
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
