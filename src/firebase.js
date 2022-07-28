import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

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

export { db };
