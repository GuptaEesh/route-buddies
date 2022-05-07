const ChatMessage = ({ message, auth }) => {
  console.log(auth);
  return (
    <div
      className={`flex items-center gap-x-4  mt-5  px-4 pb-4 ${
        auth.currentUser.uid === message.uid ? "flex-row-reverse" : ""
      }`}
    >
      <img width="15" height="15" src={message.userImg} alt="" />
      <p className="text-xs font-medium leading-3 text-gray-600">
        {message.text}
      </p>
    </div>
  );
};
export { ChatMessage };
