// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPD3b-vH-x0E0rYRXQ4gk5vwyoyV49AUM",
  authDomain: "art-museum-66ea7.firebaseapp.com",
  projectId: "art-museum-66ea7",
  storageBucket: "art-museum-66ea7.firebasestorage.app",
  messagingSenderId: "407653577622",
  appId: "1:407653577622:web:1ab4ee5f679907beb4e3b7",
  measurementId: "G-NCNKHF1CB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);