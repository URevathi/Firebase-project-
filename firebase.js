// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWXW9a306Gj3y3SGMxMY_sK-NTQOu-eHU",
  authDomain: "fir-project-da184.firebaseapp.com",
  projectId: "fir-project-da184",
  storageBucket: "fir-project-da184.appspot.com",
  messagingSenderId: "160952714319",
  appId: "1:160952714319:web:ef8a29d40d9f7b4c21d63a",
  measurementId: "G-L30ZBV46XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()

export {
  db
}
