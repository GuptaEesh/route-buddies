import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../context";
import { getChatRoom } from "../../firebase-config";
import { ChatPane } from "./ChatComponents/ChatPane";

const Chat = () => {
  const [messages, setMessages] = useState({});
  const [submittedMsg, setSubmittedMsg] = useState("");

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
  }, [submittedMsg]);

  return (
    <ChatPane
      messages={messages}
      setSubmittedMsg={setSubmittedMsg}
      senderImg={data.avatar}
      sender={data.fullName}
      receiver={user2}
    />
  );
};

export { Chat };
