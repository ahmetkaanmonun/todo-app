import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMEOCJApvl7l8f68nbphOzG_4EXLbOYoo",
  authDomain: "todo-app-akm-e8d6a.firebaseapp.com",
  projectId: "todo-app-akm-e8d6a",
  storageBucket: "todo-app-akm-e8d6a.appspot.com",
  messagingSenderId: "663127501337",
  appId: "1:663127501337:web:aa26f6c49be1a46b859888",
  measurementId: "G-7G8R5Z20SK",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

export default db;
