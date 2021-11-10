import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvLqsNQnDS-mqS7eHfonyMufs29_iTgFU",
  authDomain: "e-ride-48d89.firebaseapp.com",
  projectId: "e-ride-48d89",
  storageBucket: "e-ride-48d89.appspot.com",
  messagingSenderId: "861728752033",
  appId: "1:861728752033:web:160aa19a42610bef494be0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


