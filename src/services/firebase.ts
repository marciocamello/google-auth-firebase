// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_GOOGLE_AUTH_API_KEY,
    authDomain: "reatauth.firebaseapp.com",
    projectId: "reatauth",
    storageBucket: "reatauth.appspot.com",
    messagingSenderId: "587548344490",
    appId: import.meta.env.VITE_GOOGLE_AUTH_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);