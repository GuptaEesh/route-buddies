import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCSRq45aj8UC2sxCvCGUY36Tx5HqK31-xI',
  authDomain: 'route-buddies.firebaseapp.com',
  projectId: 'route-buddies',
  storageBucket: 'route-buddies.appspot.com',
  messagingSenderId: '915509205240',
  appId: '1:915509205240:web:0dda338ef73dec7c07030d',
  measurementId: 'G-KD6JEDH7VQ',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

const loginUser = async (dispatch) => {
  try {
    const result = await signInWithPopup(auth, provider);
     const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    localStorage.setItem('token',token);
    dispatch({type:'LOGIN',payload:{token,user}})
    // console.log(token);
    // console.log(user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const credential = GoogleAuthProvider.credentialFromError(error);

    console.log(errorCode, errorMessage, credential);
  }
};

export { auth, provider, db, loginUser };
