// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDydhG_urSljKLFgLFGGFzQmOp3_xNQKaE",
  authDomain: "appointment-80f0c.firebaseapp.com",
  projectId: "appointment-80f0c",
  storageBucket: "appointment-80f0c.appspot.com",
  messagingSenderId: "1098689496286",
  appId: "1:1098689496286:web:edc565c760871f1bc46e4f",
  measurementId: "G-5QP7M351M2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
