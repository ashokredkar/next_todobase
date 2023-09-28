import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGMxT0xabdj2xjKbYVfVEmL-Ri4Ry0gA8",
  authDomain: "firbase-new-71c52.firebaseapp.com",
  projectId: "firbase-new-71c52",
  storageBucket: "firbase-new-71c52.appspot.com",
  messagingSenderId: "474196807934",
  appId: "1:474196807934:web:33bd543bffb7ba6ff9d5af"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
