// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTPKTAVqNLKIsA8DGZ52uby71_AAIUcAw",
  authDomain: "netflixgpt-82bb7.firebaseapp.com",
  projectId: "netflixgpt-82bb7",
  storageBucket: "netflixgpt-82bb7.appspot.com",
  messagingSenderId: "514999999837",
  appId: "1:514999999837:web:40c23eca5eb542308cdcb4",
  measurementId: "G-Y9SXF861D7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();