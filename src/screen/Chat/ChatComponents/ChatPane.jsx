import { ChatMessage } from "./ChatPaneComponents/ChatMessage";
import { ChatInput } from "./ChatPaneComponents/ChatInput";
import { useState } from "react";

const ChatPane = ({
  messages,
  sender,
  receiver,
  handleSubmit,
}) => {
  const [newMsg, setNewMsg] = useState("");

  return (
        <div className="py-8 px-4 bg-slate-200">
          <div className="lg:max-w-[60vw]  w-full mx-auto bg-gray-200 mt-8 px-6 py-6 relative h-[60vh] flex flex-col">
            <div className=" px-4 ">
              <p className="text-2xl font-medium leading-3 text-gray-800">
                {receiver.fullName}
              </p>
            </div>
            <hr className="border  border-gray-200 my-4" />
            <div className="bg-white grow overflow-y-scroll">
              {messages?.map((msg, i) => (
                <ChatMessage key={i} message={msg} sender={sender} />
              ))}
            </div>
            <div className="mt-1">
              <ChatInput
                roomId={messages?.roomId}
                newMsg={newMsg}
                setNewMsg={setNewMsg}
                handleSubmit={(e) => handleSubmit(e, newMsg, setNewMsg)}
              />
            </div>
          </div>
        </div>
  );
};

export { ChatPane };
