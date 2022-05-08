import React from "react";
import { Link } from "react-router-dom";

const ProfileViewer = ({
  id = "fddf",
  userImg = "https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png",
  userName = "dummyUser",
  designation = "Professional",
  source = "Karnal",
  destination = "Delhi",
}) => {
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
          <div className="ml-2 md:ml-6">
            <p className="text-xl font-bold leading-4 text-gray-800">
              {userName}
            </p>
            <p className="text-base leading-3 text-gray-500 pt-2">
              {designation}
            </p>
          </div>
        </div>
      </div>
      <div className="py-6">
        <div className="flex items-center justify-center w-full sm:px-24 pb-2">
          <div className="flex  sm:w-5/6 w-3/4 justify-center items-center">
            <div className="w-full h-2 bg-gray-100 flex flex-row items-center justify-between">
              <div className="w-5 h-5 bg-gray-800 dark:bg-gray-100 rounded flex items-center justify-center">
                <svg
                  className="text-white dark:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
              <div className="w-5 h-5 bg-indigo-700 rounded flex items-center justify-center  md:ml-8 lg:ml-20" />
            </div>
          </div>
        </div>
        <div className="m-2 block w-5/6 sm:w-4/6 lg:w-3/4 mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium leading-4 text-indigo-700 ">
                {source}
              </p>
            </div>
            <div className="flex flex-col items-center pl-10 md:pl-8 lg:pl-20">
              <p className="text-lg font-medium leading-4 text-indigo-700">
                {destination}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-center">
        <Link
          to={`/explore/${id}`}
          className="rounded-md flex space-x-2 w-40 h-10 font-normal text-md leading-3 text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-700 hover:bg-indigo-700 duration-150 justify-center items-center"
        >
          Open Profile Page
        </Link>
      </div>
    </div>
  );
};

export { ProfileViewer };
