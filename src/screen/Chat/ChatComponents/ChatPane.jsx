import { ChatMessage } from "./ChatPaneComponents/ChatMessage";
import { ChatInput } from "./ChatPaneComponents/ChatInput";

const ChatPane = ({
  //   id = "fddf",
  //   userImg = "https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png",
  userName = "dummyUser",
}) => {
  const message = {
    userImg:
      "https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png",
    text: "Hello there",
    uid: "sfhbhskj",
  };
  const auth = {
    currentUser: { uid: "jfdjknnd" },
  };
  return (
    <>
      <div>
        <div className="py-12 px-4">
          <div className="lg:max-w-[548px] w-full mx-auto bg-gray-200 mt-8 px-6 py-6 relative h-[500px] flex flex-col">
            <div className=" px-4 ">
              <p className="text-lg font-medium leading-3 text-gray-800">
                {userName}
              </p>
            </div>
            <hr className="border  border-gray-200 my-4" />
            <div className="bg-white grow overflow-y-scroll">
              <ChatMessage message={message} auth={auth} />
              <ChatMessage message={message} auth={auth} />
              <ChatMessage message={message} auth={auth} />
              <ChatMessage message={message} auth={auth} />
              <ChatMessage message={message} auth={auth} />
              <ChatMessage message={message} auth={auth} />
              <ChatMessage message={message} auth={auth} />
              <ChatMessage message={message} auth={auth} />
              <ChatMessage message={message} auth={auth} />
              <ChatMessage message={message} auth={auth} />
              <ChatMessage message={message} auth={auth} />
              <ChatMessage message={message} auth={auth} />
              <ChatMessage message={message} auth={auth} />
              <ChatMessage message={message} auth={auth} />
              <ChatMessage message={message} auth={auth} />
              <ChatMessage message={message} auth={auth} />
              <ChatMessage message={message} auth={auth} />
            </div>
            <div className="mt-1">
              <ChatInput />
            </div>
          </div>
        </div>

        <style>
          {`
             body{
               background:rgb(243 244 246);
             }
             `}
        </style>
      </div>
    </>
  );
};

export { ChatPane };
