import firebase from "firebase/app";
import "firebase/auth";
// import 'firebase/database'
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwm-43q0gzomnsKgFbAHUJwyJLeg-0SPw",
  authDomain: "bbtv-9f617.firebaseapp.com",
  projectId: "bbtv-9f617",
  storageBucket: "bbtv-9f617.appspot.com",
  messagingSenderId: "918032145983",
  appId: "1:918032145983:web:53c8c9b5fc45c5b737e28a",
  measurementId: "G-D84TV5DEJF",
};

let app = null;

// Initialize Firebase
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}

// console.log("firebase:", firebase);

export default firebase;
