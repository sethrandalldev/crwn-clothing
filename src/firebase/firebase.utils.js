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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log(additionalData);
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc (`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      }, {merge:true});
    } catch(error) {
      console.error('error creating user', error.message);
    }
  }

  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;