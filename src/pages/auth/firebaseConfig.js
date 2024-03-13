import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA0wbM3LRzRkXE3Im7R0zvA_kD6iaq9aYY",
  authDomain: "bookingapp-2e67d.firebaseapp.com",
  projectId: "bookingapp-2e67d",
  storageBucket: "bookingapp-2e67d.appspot.com",
  messagingSenderId: "797474786866",
  appId: "1:797474786866:web:fe792843fda1e423cdf62b",
  measurementId: "G-ZTG0FQ943W"
};

const app = initializeApp(firebaseConfig);
export const database=getAuth(app)