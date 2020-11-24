import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAD_TMWOs2SmZN7-7PxmXOUQo3dTzwkV7I",
    authDomain: "crown-db-9dea5.firebaseapp.com",
    databaseURL: "https://crown-db-9dea5.firebaseio.com",
    projectId: "crown-db-9dea5",
    storageBucket: "crown-db-9dea5.appspot.com",
    messagingSenderId: "655678322185",
    appId: "1:655678322185:web:5f66cefc45013c18e7ead8",
    measurementId: "G-F5SXXMMC1W"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;