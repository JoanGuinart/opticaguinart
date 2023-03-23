// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDVbnmyV-kAXJcyO5GEgcQSdMO6U8tA2PE",
  authDomain: "react-optica.firebaseapp.com",
  projectId: "react-optica",
  storageBucket: "react-optica.appspot.com",
  messagingSenderId: "500853404729",
  appId: "1:500853404729:web:48b11cad29d8d43f0cc9e8",
  measurementId: "G-P9Y9FTCXNW"
};

/* const firebaseConfig = {
  apiKey: "AIzaSyAkLSfm0_0_23dKE1p0tJeN0kSaa2cElGA",
  authDomain: "react-optica-guinart.firebaseapp.com",
  projectId: "react-optica-guinart",
  storageBucket: "react-optica-guinart.appspot.com",
  messagingSenderId: "915224441117",
  appId: "1:915224441117:web:149da2521f545e990bf1f4"
}; */

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)