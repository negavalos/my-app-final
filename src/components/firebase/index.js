// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4QQiwREYrxXDtb3ZbiRu18IQ-0c-q8Uk",
  authDomain: "my-app-final-ddd6e.firebaseapp.com",
  projectId: "my-app-final-ddd6e",
  storageBucket: "my-app-final-ddd6e.appspot.com",
  messagingSenderId: "912294104871",
  appId: "1:912294104871:web:61d181cd7abc0ee4df2302",
  measurementId: "G-0ZBL8FZEPG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// inicializar firestore
 export const db = getFirestore();