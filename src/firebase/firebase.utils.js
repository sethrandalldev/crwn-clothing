import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCpZN3LOPKKMwhzW7MUSAaJn56b4uvIe8c",
  authDomain: "crwn-db-cafdb.firebaseapp.com",
  databaseURL: "https://crwn-db-cafdb.firebaseio.com",
  projectId: "crwn-db-cafdb",
  storageBucket: "crwn-db-cafdb.appspot.com",
  messagingSenderId: "293984214487",
  appId: "1:293984214487:web:b5c3e56e130ae18822bf92",
  measurementId: "G-NL1C3ZRMHM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;