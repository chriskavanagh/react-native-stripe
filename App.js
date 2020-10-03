import 'react-native-gesture-handler';
import React from 'react';
import store from './store/store';
import {decode, encode} from 'base-64';
import TabNavigator from './Routes/TabNavigator';
import {Provider as StoreProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createFirestoreInstance, getFirestore} from 'redux-firestore';
import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase';
import firebase from 'firebase/app';

//Firebase won't work without this.
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const rrfConfig = {
  userProfile: 'users',
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default function App() {
  return (
    <StoreProvider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </ReactReduxFirebaseProvider>
    </StoreProvider>
  );
}
