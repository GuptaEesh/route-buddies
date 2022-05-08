import React from "react";
import { Link } from "react-router-dom";
const ChatUserDisplay = ({
  user,

}) => {
    const {uid:id,fullName:userName,profession:designation,avatar:userImg}=user;
  return (
    <div className=" rounded m-4 flex flex-col w-[90%] shadow-lg py-4 px-5  bg-white">
      <div className="flex items-start justify-between">
        <div className="flex items-center mb-4 lg:mb-0 mr-10">
          <div className="w-20 h-20 bg-cover rounded-md mr-3">
            <img
              src={userImg}
              alt={userName}
              referrerPolicy="no-referrer"
              className="rounded-full h-full w-full overflow-hidden shadow"
            />
          </div>
          <div>
            <p className="text-xl font-bold leading-4 text-gray-800">
              {userName}
            </p>
            <p className="text-base leading-3 text-gray-500 pt-2">
              {designation}
            </p>
          </div>
        </div>
        <div className="flex items-end justify-center">
          <Link
            to={`/chat/${id}`}
            state={{ user2: user }}
            className="rounded-md flex space-x-2 w-40 h-10 font-normal text-md leading-3 text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-700 hover:bg-indigo-700 duration-150 justify-center items-center"
          >
            Open Chat
          </Link>
        </div>
      </div>
    </div>
  );
};

export { ChatUserDisplay };
