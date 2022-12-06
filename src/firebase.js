
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDylRrZt_34Llh6-pFGSeBORtQRZgJG7Qc",
    authDomain: "whatsapp-clone-23145.firebaseapp.com",
    projectId: "whatsapp-clone-23145",
    storageBucket: "whatsapp-clone-23145.appspot.com",
    messagingSenderId: "713875443701",
    appId: "1:713875443701:web:34ed0e02e5162bf23c1abc"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
