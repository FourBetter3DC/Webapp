// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzUQGyGl6wTY2ePM2PH388lMfOpNgfQVE",
  authDomain: "fourbetter-783e8.firebaseapp.com",
  projectId: "fourbetter-783e8",
  storageBucket: "fourbetter-783e8.appspot.com",
  messagingSenderId: "695493332143",
  appId: "1:695493332143:web:97c6a80b0a14434164d85a",
  measurementId: "G-RZ5D6HR7BM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);