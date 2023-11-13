// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKraCABeUvSNUfutfu4pHEK5gkQY9Rb-g",
  authDomain: "izabellaproject-f8c54.firebaseapp.com",
  projectId: "izabellaproject-f8c54",
  storageBucket: "izabellaproject-f8c54.appspot.com",
  messagingSenderId: "1005463048059",
  appId: "1:1005463048059:web:fba61a72dc3a98aeabb7de",
  measurementId: "G-PPGGXMYXCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);