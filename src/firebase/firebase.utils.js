import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCCFxjNnpvC9WgS1La_qw4_Uinl74wMmWI",
  authDomain: "crwn-db-5a5df.firebaseapp.com",
  databaseURL: "https://crwn-db-5a5df.firebaseio.com",
  projectId: "crwn-db-5a5df",
  storageBucket: "crwn-db-5a5df.appspot.com",
  messagingSenderId: "641144524392",
  appId: "1:641144524392:web:477c2e4d84ae1dbd95b5dd",
  measurementId: "G-SWE982B7WC",
};

export const creaeteUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
