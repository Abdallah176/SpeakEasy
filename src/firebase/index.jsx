
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBfWL5uDBLmkWty9KxSno6ie7NKkwhyNnY",
    authDomain: "bootcamp-1b886.firebaseapp.com",
    projectId: "bootcamp-1b886",
    storageBucket: "bootcamp-1b886.firebasestorage.app",
    messagingSenderId: "6108369058",
    appId: "1:6108369058:web:f27ce933b7751ea2cf87fb"
    };

const app = initializeApp(firebaseConfig);
// DataBase Connection
const db = getFirestore(app); 
export default db;