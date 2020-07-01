import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBTMJAe6CxQloUQvjbvZRk22jC5TBUSFH8",
    authDomain: "crwn-db-78d7e.firebaseapp.com",
    databaseURL: "https://crwn-db-78d7e.firebaseio.com",
    projectId: "crwn-db-78d7e",
    storageBucket: "crwn-db-78d7e.appspot.com",
    messagingSenderId: "423841762127",
    appId: "1:423841762127:web:7b65ef720633551239133a",
    measurementId: "G-YKRCV6THW9"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;