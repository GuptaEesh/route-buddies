import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCSRq45aj8UC2sxCvCGUY36Tx5HqK31-xI",
  authDomain: "route-buddies.firebaseapp.com",
  projectId: "route-buddies",
  storageBucket: "route-buddies.appspot.com",
  messagingSenderId: "915509205240",
  appId: "1:915509205240:web:0dda338ef73dec7c07030d",
  measurementId: "G-KD6JEDH7VQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider =  new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db
