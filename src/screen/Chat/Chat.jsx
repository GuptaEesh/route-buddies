import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../context";
import { getChatRoom } from "../../firebase-config";
import { ChatPane } from "./ChatComponents/ChatPane";

const Chat = () => {
  const [messages, setMessages] = useState([{}]);
  const {
    authState: { data },
  } = useAuth();

  const {
    state: { user2 },
  } = useLocation();

  useEffect(() => {
    (async () => {
      const fetchedMessages = await getChatRoom(data.fullName, user2);
      setMessages(fetchedMessages);
    })();
  }, []);
  return (
    messages?.length && (
      <ChatPane messages={messages} sender={data.fullName} receiver={user2} />
    )
  );
};

export { Chat };
