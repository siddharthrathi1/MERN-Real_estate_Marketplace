// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-27bec.firebaseapp.com",
  projectId: "mern-estate-27bec",
  storageBucket: "mern-estate-27bec.appspot.com",
  messagingSenderId: "481891260597",
  appId: "1:481891260597:web:efed94b1f03282c12706fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);