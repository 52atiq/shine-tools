// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2STVwh2oi0bR7EsO_1F25UKLET6-YyFw",
  authDomain: "shine-tools-22a54.firebaseapp.com",
  projectId: "shine-tools-22a54",
  storageBucket: "shine-tools-22a54.appspot.com",
  messagingSenderId: "422006705673",
  appId: "1:422006705673:web:32fc12a506e07d2c6472d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;