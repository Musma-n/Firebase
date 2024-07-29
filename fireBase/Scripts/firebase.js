// firebase ka sara kam idher hoga

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword, // signup
  signInWithEmailAndPassword, // login
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAE9e-YCKNr2WlhCR7Cam1V_snHrCbrp08",
    authDomain: "signup-login-d732e.firebaseapp.com",
    projectId: "signup-login-d732e",
    storageBucket: "signup-login-d732e.appspot.com",
    messagingSenderId: "772470348806",
    appId: "1:772470348806:web:971757aecb6d848bbc3787"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// def of authentication
// the process or action of verifying the identity of a user or process.

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// export let testing = "shehzad"

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};
