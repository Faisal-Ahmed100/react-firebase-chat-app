import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA0yHBk1-i1eNyhmIj18x9cIQyU8ZPOfMw",
  authDomain: "chat2chat-d14fc.firebaseapp.com",
  projectId: "chat2chat-d14fc",
  storageBucket: "chat2chat-d14fc.appspot.com",
  messagingSenderId: "35924811336",
  appId: "1:35924811336:web:82c392f44f786279fa827d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db = getFirestore(app);