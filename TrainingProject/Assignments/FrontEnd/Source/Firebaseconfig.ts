// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from 'firebase/storage';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCddwVE7pcodb8ScOa9uFMbDN9JAOthN9o",
  authDomain: "swiggy-3e3f7.firebaseapp.com",
  projectId: "swiggy-3e3f7",
  storageBucket: "swiggy-3e3f7.appspot.com",
  messagingSenderId: "981115851399",
  appId: "1:981115851399:web:5b855f709eccce41289e22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);



export { storage };