import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpROQNhRGCjbYJHNxpEoTiJhhoJefaVlk",
  authDomain: "scheduler-adef2.firebaseapp.com",
  projectId: "scheduler-adef2",
  storageBucket: "scheduler-adef2.appspot.com",
  messagingSenderId: "882507871628",
  appId: "1:882507871628:web:095a8b136f1894ff7912a9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();