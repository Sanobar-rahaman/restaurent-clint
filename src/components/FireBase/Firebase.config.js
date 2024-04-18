// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCVzrC1pZmrqp4I0_yAxsEPj6raJKQ678",
  authDomain: "bistro-boss-310e9.firebaseapp.com",
  projectId: "bistro-boss-310e9",
  storageBucket: "bistro-boss-310e9.appspot.com",
  messagingSenderId: "36214689666",
  appId: "1:36214689666:web:40e67aae7f35d755f1899b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 export default auth;