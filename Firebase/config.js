import * as firebase from 'firebase';
//import '@firebase/auth';
//import '@firebase/firestore';

/* const firebaseConfig = {
  apiKey: 'AIzaSyDuU74LrKYkPv6dRBQdg42siFWwSPWKuBo',
  authDomain: 'reactnativeauth-64965.firebaseapp.com',
  databaseURL: 'https://reactnativeauth-64965.firebaseio.com',
  projectId: 'reactnativeauth-64965',
  storageBucket: 'reactnativeauth-64965.appspot.com',
  messagingSenderId: '988338379143',
  appId: '1:988338379143:web:aedddf63e350fa289f5b22',
}; */

// stripeproject firebase settings
const firebaseConfig = {
  apiKey: 'AIzaSyCRTsh7m5Y0fElFcUn6dZx2S1dFJ4GKtvE',
  authDomain: 'stripeproject-3e2a7.firebaseapp.com',
  databaseURL: 'https://stripeproject-3e2a7.firebaseio.com',
  projectId: 'stripeproject-3e2a7',
  storageBucket: 'stripeproject-3e2a7.appspot.com',
  messagingSenderId: '781716345076',
  appId: '1:781716345076:web:8c9c7623cf407ff01c8ea1',
  measurementId: 'G-PZZPM4YLWE',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.firestore();

// export { firebase };
export default firebase;
