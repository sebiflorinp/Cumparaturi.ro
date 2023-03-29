import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCOx2YT3EYTWa4M-fHWb0Fn5oF8t6cNmzw",
  authDomain: "cumparaturiro-27f52.firebaseapp.com",
  projectId: "cumparaturiro-27f52",
  storageBucket: "cumparaturiro-27f52.appspot.com",
  messagingSenderId: "467483271068",
  appId: "1:467483271068:web:585c7a5a647cbfa086f259"
};

initializeApp(firebaseConfig)

const db = getFirestore()
export default db