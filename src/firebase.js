import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEv6BkOo2A1fSHCU0EuTnchtE6LvgTbKE",
  authDomain: "react-tut-5123d.firebaseapp.com",
  projectId: "react-tut-5123d",
  storageBucket: "react-tut-5123d.appspot.com",
  messagingSenderId: "510179243775",
  appId: "1:510179243775:web:62138e6d241390f7533eca"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);