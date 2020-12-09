import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAury-FyTls-lpOGqy0qfLZhrMu7db1_Dg",
  authDomain: "ninja-firegram-c08ed.firebaseapp.com",
  projectId: "ninja-firegram-c08ed",
  storageBucket: "ninja-firegram-c08ed.appspot.com",
  messagingSenderId: "86158796173",
  appId: "1:86158796173:web:a503f112237013689889c4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
