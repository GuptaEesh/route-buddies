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
          <div className="w-14 h-14 bg-cover rounded-md mr-3">
            <img
              src={userImg}
              alt={userName}
              referrerPolicy="no-referrer"
              className="rounded-full h-full w-full overflow-hidden shadow"
            />
          </div>
          <div>
            <p className="text-sm font-bold leading-4 text-gray-800">
              {userName}
            </p>
            <p
              className="text-xs leading-3 text-gray-500 
                                 pt-2"
            >
              {designation}
            </p>
          </div>
        </div>
        <div className="flex items-end justify-center">
        <Link
          to={`/chat/${id}`}
          state={{ user2: user }}
          className=" text-xs font-medium leading-3 text-white py-3 px-4 rounded bg-indigo-700 focus:outline-none hover:opacity-90"
        >
          Open Chat
        </Link>
      </div>
      </div>

      
    </div>
  );
};

export { ChatUserDisplay };
