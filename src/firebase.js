// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADnUc4Nb6zu3P1degBPwZZdvIJKEvzyxw",
  authDomain: "my-porfolio-c5ab3.firebaseapp.com",
  projectId: "my-porfolio-c5ab3",
  storageBucket: "my-porfolio-c5ab3.appspot.com",
  messagingSenderId: "163404663166",
  appId: "1:163404663166:web:44f886ade6e26776a34b2f",
  measurementId: "G-KSZ7ZJ7RW9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const messaging = getMessaging(app);

export { db };
