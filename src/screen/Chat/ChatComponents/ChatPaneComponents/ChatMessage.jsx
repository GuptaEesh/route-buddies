const ChatMessage = ({ message, auth }) => {
  console.log(auth);
  return (
    <div
      className={`flex items-center gap-x-4  mt-5  px-4 pb-4 max-w-xs  ${
        auth.currentUser.uid === message.uid ? "flex-row-reverse" : ""
      }`}
    >
      <img className="w-8 h-8 md:w-10 md:h-10" src={message.userImg} alt="" />
      <p className="text-sm text-left font-medium text-gray-600 border-solid	border-2 rounded-xl border-gray-700 py-2.5 px-4">
        {message.text}
      </p>
    </div>
  );
};
export { ChatMessage };
