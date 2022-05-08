import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
  getDoc,
} from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
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

// Auth Methods

const loginUser = async (dispatch, navigate) => {
  try {
    await setPersistence(auth, browserLocalPersistence);
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    await addDataToFirestore(user?.uid, {
      uid: user?.uid,
      fullName: user?.displayName,
      email: user?.email,
      avatar: user?.photoURL,
    });
    dispatch({ type: "LOGIN", payload: user });
    navigate("/registration");
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const credential = GoogleAuthProvider.credentialFromError(error);

    console.log(errorCode, errorMessage, credential);
  }
};

const getCurrentUser = async (dispatch, navigate) => {
  try {
    await auth.onAuthStateChanged((user) => {
      if (user) {
        const res = getUserData(user?.uid, dispatch);
        if (!res) {
          navigate("/registration");
        }
        dispatch({ type: "LOGIN", payload: user });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const logout = async (dispatch) => {
  try {
    dispatch({ type: "LOGOUT" });
    await auth.signOut();
  } catch (error) {
    console.log(error);
  }
};

// Firestore methods
const addDataToFirestore = async (uid, data) => {
  try {
    const docRef = doc(db, "Users", uid);

    await setDoc(docRef, data);

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const updateDataToFirestore = async (uid, data, dispatch) => {
  try {
    const docRef = doc(db, "Users", uid);

    await updateDoc(docRef, data);
    dispatch({ type: "USER_DATA", payload: data });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getUserMatches = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "Users"));
    return querySnapshot;
  } catch (error) {
    console.log(error);
  }
};

const getUserData = async (uid, dispatch) => {
  try {
    const docRef = doc(db, "Users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      dispatch({ type: "USER_DATA", payload: docSnap.data() });
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.log(error);
  }
};

const getMatchedUserData = async (uid) => {
  try {
    let matchedUser = null;
    const q = query(collection(db, "Users"), where("uid", "==", uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      matchedUser = doc.data();
    });

    return matchedUser;
  } catch (error) {
    console.log(error);
  }
};

const getChatMessages = async (currentRoom) => {
  const messagesRef = collection(db, "ChatRooms", currentRoom.id, "Messages");

  const messagesSnapShot = await getDocs(messagesRef);

  const messages = await messagesSnapShot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return messages;
};

const getChatRoom = async (user1, user2) => {
  try {
    let matchedRoom = null;
    const chatRoom = query(
      collection(db, "ChatRooms"),
      where("user1", "==", user1) && where("user2", "==", user2)
    );
    const chatSnapShot = await getDocs(chatRoom);

    chatSnapShot.forEach((doc) => {
      matchedRoom = {
        id: doc.id,
        data: doc.data(),
      };
    });

    if (!matchedRoom) {
      const docRef = collection(db, "ChatRooms");

      const newRoom = await addDoc(docRef, {
        roomName: `${user1} - ${user2}`,
        user1: user1,
        user2: user2,
      });

      const chatRoomRef = doc(db, "ChatRooms", newRoom.id);
      const chatRoomSnapShot = await getDoc(chatRoomRef);

      matchedRoom = {
        id: newRoom.id,
        data: chatRoomSnapShot.data(),
      };
    }

    return getChatMessages(matchedRoom);
  } catch (error) {
    console.log(error);
  }
};

export {
  auth,
  db,
  loginUser,
  getCurrentUser,
  logout,
  addDataToFirestore,
  updateDataToFirestore,
  getUserMatches,
  getMatchedUserData,
  getChatRoom,
};
