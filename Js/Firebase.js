// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE4cHfbbhxkn-srIBhNFxGOgqqaV5W0WI",
  authDomain: "patent-1af2d.firebaseapp.com",
  databaseURL: "https://patent-1af2d-default-rtdb.firebaseio.com",
  projectId: "patent-1af2d",
  storageBucket: "patent-1af2d.appspot.com",
  messagingSenderId: "418181215782",
  appId: "1:418181215782:web:3bb98f8ee642353f0618e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
