import { Firestore, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA6ns9No_jJmIc9G3F1dGW659UZ_0U2CsM",
  authDomain: "amadeo-ecommerce.firebaseapp.com",
  projectId: "amadeo-ecommerce",
  storageBucket: "amadeo-ecommerce.appspot.com",
  messagingSenderId: "277030625958",
  appId: "1:277030625958:web:01123b959ae106a2928a67"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db