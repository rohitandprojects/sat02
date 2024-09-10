// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5wmWHU7Xt5pCfxIkvI6oeZO8YWS1Al10",
  authDomain: "satvam-corporate-website-75512.firebaseapp.com",
  projectId: "satvam-corporate-website-75512",
  storageBucket: "satvam-corporate-website-75512.appspot.com",
  messagingSenderId: "230423000891",
  appId: "1:230423000891:web:8ba31ed9066bb1fdb5e91e",
  measurementId: "G-K96M2MV9T7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
