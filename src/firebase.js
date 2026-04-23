import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALrEFiw63wlq2o5s0DI4oe_NBmEhsuYp0",
  authDomain: "portfolio-app-8a454.firebaseapp.com",
  projectId: "portfolio-app-8a454",
  storageBucket: "portfolio-app-8a454.appspot.com", // ← ИСПРАВЛЕНО
  messagingSenderId: "863857955518",
  appId: "1:863857955518:web:3ef4626f4a0493a7f404ef"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();