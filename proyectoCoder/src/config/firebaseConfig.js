// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3y_ekpFkA3rnwDOANbBgCIUrkHNDDDqY",
  authDomain: "proyectoreact-coder.firebaseapp.com",
  projectId: "proyectoreact-coder",
  storageBucket: "proyectoreact-coder.appspot.com",
  messagingSenderId: "951458648546",
  appId: "1:951458648546:web:14862a676d0e13df59e9bb"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, firebaseConfig }; 

