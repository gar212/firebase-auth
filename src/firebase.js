import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBhhGB6eC5Hbbxrkbu07zB_Rsc3IPcOcVk",
    authDomain: "auth-prac-a9e20.firebaseapp.com",
    projectId: "auth-prac-a9e20",
    storageBucket: "auth-prac-a9e20.appspot.com",
    messagingSenderId: "332550215409",
    appId: "1:332550215409:web:fb15b768633ed4ceb97b50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);