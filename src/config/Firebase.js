
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB_jXpJ3WYB9bCXhaLoAEwXDI1Ks5IQBDM",
    authDomain: "olx-clone-7.firebaseapp.com",
    projectId: "olx-clone-7",
    storageBucket: "olx-clone-7.appspot.com",
    messagingSenderId: "484015321765",
    appId: "1:484015321765:web:8bb61c794f5708b320d34c",
    measurementId: "G-HNZR6RD9R2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();
  export const auth = firebase.auth();
  export const storage=firebase.storage();

