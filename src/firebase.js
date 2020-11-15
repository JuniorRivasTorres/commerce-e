import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDveEK1p1WTPDcs5Z4WHB1U5xPBR_QvHGQ",
    authDomain: "commerce-e-89bd1.firebaseapp.com",
    databaseURL: "https://commerce-e-89bd1.firebaseio.com",
    projectId: "commerce-e-89bd1",
    storageBucket: "commerce-e-89bd1.appspot.com",
    messagingSenderId: "989245501188",
    appId: "1:989245501188:web:5cc6aab138888c0aeaaa51",
    measurementId: "G-N33QXVYFSV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };