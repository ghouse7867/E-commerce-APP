// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCcXN2HkiPeMXcov7fKlFmEF8Zb3gBkoJs",
  authDomain: "react-blog-app-d00e7.firebaseapp.com",
  projectId: "react-blog-app-d00e7",
  storageBucket: "react-blog-app-d00e7.appspot.com",
  messagingSenderId: "849724024236",
  appId: "1:849724024236:web:5a466425b515a88afd0609"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()