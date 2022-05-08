import { RiSendPlane2Fill } from "react-icons/ri";

const ChatInput = ({ handleSubmit, newMsg, setNewMsg }) => {
  return (
    <div
      onSubmit={(e) => handleSubmit(e)}
      className="lg:max-w-[548px] w-full mx-auto"
    >
      <form className="relative">
        <input
          className="relative text-sm leading-none text-gray-600 bg-white  rounded  w-full px-10 py-4 outline-none"
          type="text"
          name="input"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
        />
        <button
          type="submit"
          className="absolute z-20 cursor-pointer top-[18px] right-4"
        >
          <RiSendPlane2Fill />
        </button>
      </form>
    </div>
  );
};

export { ChatInput };
