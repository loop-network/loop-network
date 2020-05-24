import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyA5t4ZjNFdt-_C9emIm-ZKyt2hAlZ05RAM",
    authDomain: "the-loop-5430a.firebaseapp.com",
    databaseURL: "https://the-loop-5430a.firebaseio.com",
    projectId: "the-loop-5430a",
    storageBucket: "the-loop-5430a.appspot.com",
    messagingSenderId: "658173641785",
    appId: "1:658173641785:web:2271e3de1f0c2de4b139e8",
  measurementId: "G-RC1HY2QCZF"
  });

  export default app;

export const auth = firebase.auth();
export const db = firebase.firestore();
