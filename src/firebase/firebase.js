
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import get auth 
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI8dtTY8PvhWZAvf_d4NRwCz0-7XtxCAY",
  authDomain: "mern-apps-13484.firebaseapp.com",
  projectId: "mern-apps-13484",
  storageBucket: "mern-apps-13484.appspot.com",
  messagingSenderId: "61690263723",
  appId: "1:61690263723:web:6a96142793dcdde6445fee"
};

// Initialize Firebase
export const fireBaseApp = initializeApp(firebaseConfig);

// init auth 
export const auth = getAuth(fireBaseApp); 

// google provider 
export const googleProvider = new GoogleAuthProvider(); 








