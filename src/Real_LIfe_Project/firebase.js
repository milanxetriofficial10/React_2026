// src/Real_LIfe_Project/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsM7O6JjDG4HzgZ63R6F6R80A28myB_xw",                  // console बाट copy
  authDomain: "loginbase-8dbcd.firebaseapp.com",
  projectId: "loginbase-8dbcd",
  storageBucket: "loginbase-8dbcd.appspot.com",
  messagingSenderId: "611427042704",
  appId: "1:611427042704:web:28ae9d6bd9bf522c579f15"
};


const app = initializeApp(firebaseConfig); 


export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
