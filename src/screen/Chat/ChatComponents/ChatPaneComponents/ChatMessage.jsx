import { useEffect, useRef } from "react";
import Moment from "react-moment";

const ChatMessage = ({ message, sender }) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={scrollRef}
      className={`flex items-start gap-x-4  mt-5  px-4 pb-4 w-full  ${
        message.from.uid === sender.uid ? "flex-row-reverse" : ""
      }`}
    >
      <img
        className="w-8 h-8 md:w-10 md:h-10"
        src={message?.from.avatar}
        alt={message.from.fullName}
        referrerPolicy="no-referrer"
      />
      <section className={`flex flex-col ${message.from.uid === sender.uid ? "items-end" : "items-start"}`}>
        <p className="text-base text-left font-medium text-gray-600 border-solid	border-2 rounded-xl border-gray-700 py-2.5 px-4">
          {message.msg}
        </p>
        <small className="text-xs text-left mt-1">
          <Moment fromNow>{message.createdAt.toDate()}</Moment>
        </small>
      </section>
    </div>
  );
};
export { ChatMessage };
