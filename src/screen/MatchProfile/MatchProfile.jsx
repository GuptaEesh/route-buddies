import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMatchedUserData } from "../../firebase-config";

const MatchProfile = ({
  userCoverImg = "https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_29.png",
}) => {
  const [matchedUser, setMatchedUser] = useState();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getMatchedUserData(id);
      setMatchedUser(res);
    })();
  }, [id]);

  console.log(matchedUser);

  if (!matchedUser) return <h1>Loading...</h1>;

  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen py-8">
        <div className="bg-white shadow rounded">
          <div className="relative">
            <img
              className="h-56 shadow rounded-t w-full object-cover object-center"
              src={userCoverImg}
              alt="cover image"
            />
            <div className="inset-0 m-auto w-36 h-36 absolute bottom-0 -mb-12 rounded border-2 shadow border-white">
              <img
                className="w-full h-full overflow-hidden object-cover rounded"
                src={matchedUser.avatar}
                alt={matchedUser.fullName}
              />
            </div>
          </div>
          <div className="px-5 xl:px-10 pb-10">
            <div className="pt-16 flex flex-col  items-start xl:items-center justify-between">
              <div className=" w-full ">
                <div className="text-center mb-3 xl:mb-0 flex flex-col  items-center justify-between">
                  <h2 className="mb-3 text-2xl text-gray-800 font-bold tracking-normal">
                    {matchedUser.fullName}
                  </h2>
                  <div className="text-base bg-gray-200 text-gray-600 px-5 py-1 font-normal rounded-full">
                    {matchedUser.profession}
                  </div>
                </div>
                <p className="text-center mt-4 text-md tracking-normal text-gray-600 leading-5">
                  {matchedUser.description}
                </p>
              </div>

              <div className="py-6 w-full">
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
                        {matchedUser.routes[0].start}
                      </p>
                    </div>
                    <div className="flex flex-col items-center pl-10 md:pl-8 lg:pl-20">
                      <p className="text-lg font-medium leading-4 text-indigo-700">
                        {matchedUser.routes[0].end}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-center w-full">
                <Link
                  to={`/chat/${id}`}
                  state={{ user2: matchedUser }}
                  className="rounded-md flex space-x-2 w-40 h-10 font-normal text-md leading-3 text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-700 hover:bg-indigo-700 duration-150 justify-center items-center"
                >
                  Message
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Card code block end */}
      </div>
    </>
  );
};

export { MatchProfile };
