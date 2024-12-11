import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 
import { getAnalytics } from "firebase/analytics";

// Directly include Firebase credentials
const firebaseConfig = {
  apiKey: "AIzaSyDB0LO-3qWMOS3VZz1glzQ3MP74KciT0do",
  authDomain: "e-commerce-50815.firebaseapp.com",
  databaseURL: "https://e-commerce-50815-default-rtdb.firebaseio.com",
  projectId: "e-commerce-50815",
  storageBucket: "e-commerce-50815.firebasestorage.app",
  messagingSenderId: "40807411200",
  appId: "1:40807411200:web:9ee8715686c5b6348cb2e5",
  measurementId: "G-35FZ31BBFR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); 
const analytics = getAnalytics(app); // Initialize Firebase Analytics

export { auth, db, storage, analytics };
