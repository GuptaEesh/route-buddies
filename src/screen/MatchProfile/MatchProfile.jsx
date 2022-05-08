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
      <div className="flex items-center justify-center w-full py-8">
        {/* Card code block start */}
        <div className="bg-white shadow rounded">
          <div className="relative">
            <img
              className="h-56 shadow rounded-t w-full object-cover object-center"
              src={userCoverImg}
              alt="cover image"
            />
            <div className="inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 rounded border-2 shadow border-white">
              <img
                className="w-full h-full overflow-hidden object-cover rounded"
                src={matchedUser.avatar}
                alt={matchedUser.fullName}
              />
            </div>
          </div>
          <div className="px-5 xl:px-10 pb-10">
            <div className="flex justify-center  w-full pt-16 ">
              <div className="flex items-center">
                <svg
                  className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                  />
                </svg>
                <svg
                  className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                  />
                </svg>
                <svg
                  className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                  />
                </svg>
                <svg
                  className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                  />
                </svg>
                <svg
                  className="w-4 text-gray-200 icon icon-tabler icon-tabler-star"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                  />
                </svg>
              </div>
            </div>
            <div className="pt-3 flex flex-col  items-start xl:items-center justify-between">
              <div className=" w-full ">
                <div className="text-center mb-3 xl:mb-0 flex flex-col  items-center justify-between">
                  <h2 className="mb-3 text-2xl text-gray-800 font-medium tracking-normal">
                    {matchedUser.fullName}
                  </h2>
                  <div className="text-sm bg-gray-200 text-gray-600 px-5 py-1 font-normal rounded-full">
                    {matchedUser.profession}
                  </div>
                </div>
                <p className="text-center mt-4 text-md tracking-normal text-gray-600 leading-5">
                  {matchedUser.description}
                </p>
              </div>

              <div className="sm:flex sm:block hidden items-center justify-between w-full sm:px-24 pt-6">
                <div className="sm:block flex w-full items-center">
                  <div className="sm:w-full w-2 sm:h-2 h-64 bg-gray-100 flex sm:flex-row flex-col items-center justify-between">
                    <div className="w-4 h-4 bg-gray-800 dark:bg-gray-100 rounded flex items-center justify-center">
                      <svg
                        className="text-white dark:text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
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
                    <div className="w-4 h-4 bg-indigo-700 rounded flex items-center justify-center  md:ml-8 lg:ml-20" />
                  </div>
                </div>
              </div>

              <div className="m-2 sm:block hidden md:mx-16 w-full ">
                <div className="flex items-center justify-between sm:px-24">
                  <div className="flex flex-col items-center">
                    <p className="text-sm font-medium leading-4 text-indigo-700 ">
                      {matchedUser.routes[0].start}
                    </p>
                  </div>
                  <div className="flex flex-col items-center pl-10 md:pl-8 lg:pl-20">
                    <p className="text-sm font-medium leading-4 text-indigo-700">
                      {matchedUser.routes[0].end}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full flex-col md:flex-row justify-center flex pt-6">
                <Link
                  to={`/chat/${id}`}
                  state={{ user2: matchedUser }}
                  className="ml-0 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-3 md:px-6 py-2 text-sm"
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
