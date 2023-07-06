// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getfirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4Es27N1YqP6v5FsL9RrgjWZ-JVTK20Mw",
  authDomain: "studentin-b27bd.firebaseapp.com",
  projectId: "studentin-b27bd",
  storageBucket: "studentin-b27bd.appspot.com",
  messagingSenderId: "423270228663",
  appId: "1:423270228663:web:46981da0540bffd5156332",
  measurementId: "G-JTKRNTMP4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore =getfirestore(app);

export {app, firestore};