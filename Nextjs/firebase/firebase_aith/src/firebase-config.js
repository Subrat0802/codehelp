// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN4_cKDT6ocsU4-4r5AqAjJkw1n51Ra_s",
  authDomain: "react-firebase-1ffba.firebaseapp.com",
  projectId: "react-firebase-1ffba",
  storageBucket: "react-firebase-1ffba.appspot.com",
  messagingSenderId: "425159903349",
  appId: "1:425159903349:web:a5439ccda8d49afb16503c",
  measurementId: "G-120GL0S8DD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);