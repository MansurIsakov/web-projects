import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBp0Hh34lJUKVGYVE5TWljb7WuL8QMDSPs",
  authDomain: "live-chat-mansur.firebaseapp.com",
  projectId: "live-chat-mansur",
  storageBucket: "live-chat-mansur.appspot.com",
  messagingSenderId: "72560324531",
  appId: "1:72560324531:web:5648edef7e461bb041a5c6",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth };
