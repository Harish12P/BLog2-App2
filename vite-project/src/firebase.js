// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-57459.firebaseapp.com",
  projectId: "mern-blog-57459",
  storageBucket: "mern-blog-57459.appspot.com",
  messagingSenderId: "667187725524",
  appId: "1:667187725524:web:ac88b0e242b10eb9626741",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//firbase ka use mene OAuth me kiya hai taki me agar ush pe click karu to direct me google link account me jaa skus
