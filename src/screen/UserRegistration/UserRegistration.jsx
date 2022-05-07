import React from "react";

const UserRegistration = () => {

  const userImg =
    "https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png";

  return (
    <div className="px-2 py-12 ">
      <div className="flex flex-no-wrap items-start">
        <div className="w-full ">
          <div className="py-4 px-2">
            <div className="bg-white rounded shadow">
              {/* end */}
              <div className="mt-10 px-7">
                <p className="text-xl font-semibold leading-tight text-gray-800">
                  User Details
                </p>
                <div classsName="grid grid-cols-5 gap-7 mt-7">
                    <div className="w-14 h-14 bg-cover rounded-md mr-3">
                      <img
                        src={userImg}
                        alt
                        className="rounded-full h-full w-full overflow-hidden shadow"
                      />
                    </div>
                    <div className="w-14 h-14 bg-cover rounded-md mr-3">
                      <img
                        src={userImg}
                        alt
                        className="rounded-full h-full w-full overflow-hidden shadow"
                      />
                    </div>
                    <div className="w-14 h-14 bg-cover rounded-md mr-3">
                      <img
                        src={userImg}
                        alt
                        className="rounded-full h-full w-full overflow-hidden shadow"
                      />
                    </div>
                  {/* <div className="col-span-2">
                  </div> */}

                  {/* <div className="col-start-3 col-span-3">
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        Full Name
                      </p>
                      <input className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                    </div>
                    <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      Last Name
                    </p>
                    <input className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                  </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        Location
                      </p>
                      <input className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        Profession
                      </p>
                      <input className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                    </div>
                  </div> */}
                </div>
              </div>
              <hr className="h-[1px] bg-gray-100 my-14" />
              <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                <button className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full ">
                  Cancel
                </button>
                <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { UserRegistration };
