import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDPYlMduBj0pbGq629neDChMxMJQbgyrdY",
  authDomain: "vueblogs-mansur.firebaseapp.com",
  projectId: "vueblogs-mansur",
  storageBucket: "vueblogs-mansur.appspot.com",
  messagingSenderId: "1029945696406",
  appId: "1:1029945696406:web:4651baa535fdc32314a2b7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
