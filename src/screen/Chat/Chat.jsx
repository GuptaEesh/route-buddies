import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../context";
import { db } from "../../firebase-config";
import { ChatPane } from "./ChatComponents/ChatPane";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const {
    authState: { data },
  } = useAuth();

  const {
    state: { user2 },
  } = useLocation();

  const user1 = data;
  const id =
    user1.uid > user2.uid
      ? `${user1.uid + user2.uid}`
      : `${user2.uid + user1.uid}`;

  useEffect(() => {
    (async () => {
      const msgsRef = collection(db, "messages", id, "chat");
      const q = query(msgsRef, orderBy("createdAt", "asc"));

      onSnapshot(q, (querySnapshot) => {
        let msgs = [];
        querySnapshot.forEach((doc) => msgs.push(doc.data()));
        setMessages(msgs);
      });
    })();
  }, []);

  const handleSubmit = async (e, msg, setMsg) => {
    e.preventDefault();

    const docRef = doc(db, "messages", id);
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
      await setDoc(docRef, {
        participants: [user1.uid, user2.uid],
        users: { [user1.uid]: user1, [user2.uid]: user2 },
      });
    }

    await addDoc(collection(db, "messages", id, "chat"), {
      msg,
      from: {
        name: user1.fullName,
        avatar: user1.avatar,
        uid: user1.uid,
      },
      to: {
        name: user2.fullName,
        avatar: user2.avatar,
        uid: user2.uid,
      },
      createdAt: Timestamp.fromDate(new Date()),
    });

    setMsg("");
  };

  return (
    <ChatPane
      messages={messages}
      senderImg={data.avatar}
      sender={data}
      handleSubmit={handleSubmit}
      receiver={user2}
    />
  );
};

export { Chat };
