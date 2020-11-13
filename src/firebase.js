import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC2xvn-HntJFyg_8mMX8fSUEjU7tdg14mA",
    authDomain: "commerce-e-da1e0.firebaseapp.com",
    databaseURL: "https://commerce-e-da1e0.firebaseio.com",
    projectId: "commerce-e-da1e0",
    storageBucket: "commerce-e-da1e0.appspot.com",
    messagingSenderId: "1017994107206",
    appId: "1:1017994107206:web:e91699369cd43b9ed06d47",
    measurementId: "G-ZVM6WLFT5J"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };