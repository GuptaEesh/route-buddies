import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  inMemoryPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSRq45aj8UC2sxCvCGUY36Tx5HqK31-xI",
  authDomain: "route-buddies.firebaseapp.com",
  projectId: "route-buddies",
  storageBucket: "route-buddies.appspot.com",
  messagingSenderId: "915509205240",
  appId: "1:915509205240:web:0dda338ef73dec7c07030d",
  measurementId: "G-KD6JEDH7VQ",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const loginUser = async (dispatch,navigate) => {
  try {
    await setPersistence(auth, inMemoryPersistence);
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    dispatch({ type: "LOGIN", payload: user });
    navigate('/registration')
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const credential = GoogleAuthProvider.credentialFromError(error);

    console.log(errorCode, errorMessage, credential);
  }
};

const getCurrentUser = async(dispatch) => {

  try {
     await auth.onAuthStateChanged((user)=>{
      dispatch({type:'LOGIN',payload: user});
    });
   
  } catch (error) {
    console.log(error);
  }
}

const logout = async(dispatch) => {
  try {
    dispatch({type:'LOGOUT'});
    await auth.signOut();
  } catch (error) {
    console.log(error);
  }
}


export { auth, db, loginUser, getCurrentUser,logout };
