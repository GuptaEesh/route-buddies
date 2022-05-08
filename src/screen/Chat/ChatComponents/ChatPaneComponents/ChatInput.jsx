import { RiSendPlane2Fill } from "react-icons/ri";

const ChatInput = () => {
  return (
    <div className="lg:max-w-[548px] w-full mx-auto">
      <div className="relative">
        <input
          className="relative text-sm leading-none text-gray-600 bg-white  rounded  w-full px-10 py-4 outline-none"
          type="text"
          name="input"
        />
        <button className="absolute z-20 cursor-pointer top-[18px] right-4">
          <RiSendPlane2Fill />
        </button>
      </div>
    </div>
  );
};

export { ChatInput };
