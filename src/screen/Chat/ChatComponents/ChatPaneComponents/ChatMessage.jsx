
const ChatMessage = ({ message, sender }) => {

  return (
    <div
      className={`flex items-center gap-x-4  mt-5  px-4 pb-4 w-full  ${
        message.user === sender ? "flex-row-reverse" : ""
      }`}
    >
      <img
        className="w-8 h-8 md:w-10 md:h-10"
        src={message.userImg}
        alt={message.user}
        referrerPolicy="no-referrer"
      />
      <p className="text-sm text-left font-medium text-gray-600 border-solid	border-2 rounded-xl border-gray-700 py-2.5 px-4">
        {message.message}
      </p>
    </div>
  );
};
export { ChatMessage };
