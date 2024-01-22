// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-56004.firebaseapp.com",
  projectId: "mern-blog-56004",
  storageBucket: "mern-blog-56004.appspot.com",
  messagingSenderId: "512626923116",
  appId: "1:512626923116:web:35558e6257dc91f51c2a49",
  measurementId: "G-X59LKGXDYC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
