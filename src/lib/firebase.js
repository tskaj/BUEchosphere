import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCw7NaUwsf-dS1_nDrjxv60PMigk44hDtA",
  authDomain: "buechosphere.firebaseapp.com",
  projectId: "buechosphere",
  storageBucket: "buechosphere.appspot.com",
  messagingSenderId: "727506710188",
  appId: "1:727506710188:web:4065cb1e8e91d57e2e3909",
  measurementId: "G-JG609TLKB0"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
