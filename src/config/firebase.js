import firebase from 'firebase'
const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyDPQMEsD0cRmcImwZjFfdurT4XICU3st-Y",
  authDomain: "coffee-mixer.firebaseapp.com",
  databaseURL: "https://coffee-mixer.firebaseio.com",
  projectId: "coffee-mixer",
  storageBucket: "coffee-mixer.appspot.com",
  messagingSenderId: "1068154091880"
};
const fire = firebase.initializeApp(config);
export default fire;
