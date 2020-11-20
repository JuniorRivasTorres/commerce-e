import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBw_MgHq2GJDqXeOa8wF2dazOFmPOwOXv0",
  authDomain: "e-commerce-7a00e.firebaseapp.com",
  databaseURL: "https://e-commerce-7a00e.firebaseio.com",
  projectId: "e-commerce-7a00e",
  storageBucket: "e-commerce-7a00e.appspot.com",
  messagingSenderId: "613083558591",
  appId: "1:613083558591:web:124f0d1df39f8d0b54cc0a",
  measurementId: "G-5GEEZPRM45"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

  