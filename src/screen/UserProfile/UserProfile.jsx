
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context';
import { updateDataToFirestore } from '../../firebase-config';

const UserProfile = () => {
  const {
    authState: { user, data },
    dispatch,
  } = useAuth();
  const initialData = {
    uid: user?.uid,
    fullName: user?.displayName ?? '',
    avatar:
      user.photoURL ??
      'https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png',
    profession: data?.profession ?? '',
    description: data?.description ?? '',
    mode: data?.mode ?? '',
    routes: data?.routes ?? [{ start: '', end: '' }],
  };
  const navigate = useNavigate();
  const [registeredUser, setRegisteredUser] = useState(initialData);

  const inputHandler = (e) => {
    setRegisteredUser((userFields) => ({
      ...userFields,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await updateDataToFirestore(user?.uid, registeredUser, dispatch);
    navigate('/explore');
  };
  const startLocationHandler = (e) => {
    setRegisteredUser((user) => ({
      ...user,
      routes: [{ ...user.routes[0], start: e.target.value }],
    }));
  };
  const endLocationHandler = (e) => {
    setRegisteredUser((user) => ({
      ...user,
      routes: [{ ...user.routes[0], end: e.target.value }],
    }));
  };

  return (
    <div className='px-2 py-12 '>
      <div className='flex flex-no-wrap items-start'>
        <div className='w-full '>
          <div className='py-4 px-2'>
            <div className='bg-white rounded shadow'>
              <div className='mt-10 px-7'>
                <p className='text-3xl font-semibold leading-tight text-gray-800'>
                  User Details
                </p>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-7 mt-10'>
                  <div className='col-auto md:col-span-2'>
                    <div className='w-40 h-40 bg-cover rounded-md mx-auto'>
                      <img
                        src={registeredUser.avatar}
                        alt={registeredUser?.fullName}
                        referrerPolicy='no-referrer'
                        className='rounded-full h-full w-full overflow-hidden shadow'
                      />
                    </div>
                  </div>

                  <form
                    onSubmit={submitHandler}

                    className='col-auto md:col-start-3 md:col-span-3'
                  >
                    <div>
                      <p className='text-base font-medium leading-none text-gray-800'>
                        Full Name
                      </p>
                      <input
                        required
                        placeholder='Johnrao Doekar'
                        name='fullName'
                        onChange={inputHandler}
                        value={registeredUser.fullName}
                        className='w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50'
                      />
                    </div>

                    <div className='mt-4'>
                      <p className='text-base font-medium leading-none text-gray-800'>
                        Profession
                      </p>
                      <input
                        required
                        name='profession'
                        value={registeredUser.profession}
                        onChange={inputHandler}
                        placeholder='Full-Stack Developer at XYZ'
                        className='w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50'
                      />
                    </div>
                    <div className='mt-4'>
                      <p className='text-base font-medium leading-none text-gray-800'>
                        Description
                      </p>
                      <input
                        required
                        name='description'
                        value={registeredUser.description}
                        onChange={inputHandler}
                        placeholder='Coder during the day, Netflix in the night'
                        className='w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50'
                      />
                    </div>
                    <div className='mt-4'>
                      <p className='text-base font-medium leading-none text-gray-800'>
                        Mode of Transport
                      </p>
                      <input
                        required
                        name='mode'
                        value={registeredUser.mode}
                        onChange={inputHandler}
                        placeholder='Type your mode of transport'
                        className='w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50'
                      />
                    </div>
                    <div className='flex items-center lg:max-w-[500px] w-full mt-10 mx-auto'>
                      <p className='text-lg font-medium leading-none text-gray-800'>
                        Start
                      </p>
                      <input
                        required
                        placeholder='Start location'
                        name='start'
                        value={registeredUser.routes[0].start}
                        className='w-full p-3 ml-5 border border-gray-300 rounded outline-none focus:bg-gray-50'
                        onChange={startLocationHandler}
                      />
                    </div>
                    <div className='flex items-center lg:max-w-[500px] w-full mt-10 mx-auto'>
                      <p className='text-lg font-medium leading-none text-gray-800'>
                        End
                      </p>
                      <input
                        required
                        placeholder='End location'
                        name='end'
                        value={registeredUser.routes[0].end}
                        className='w-full p-3 ml-7 border border-gray-300 rounded outline-none focus:bg-gray-50'
                        onChange={endLocationHandler}
                      />
                    </div>
                    <div className='flex mt-8 flex-col flex-wrap justify-self-start w-full px-7 md:flex-row md:justify-end gap-x-4 gap-y-4'>
                      <button className='bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border md:max-w-[95px]  w-full '>
                        Cancel
                      </button>
                      <button
                        type='submit'
                        className='bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white md:max-w-[144px] w-full '
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* {isShowRouteInput ? (
                <div className="my-4 mx-auto lg:max-w-[500px] w-full">
                  <p className="text-base font-medium leading-none text-gray-800">
                    Add Checkpoint
                  </p>
                  <div className="flex items-center mt-4">
                    <button
                      
                      className="bg-indigo-700 rounded-full hover:bg-indigo-600 transform duration-300 ease-in-out text-xl py-0 px-4 font-medium text-white w-12 h-12 ">
                      +
                    </button>
                    <input
                    required
                      placeholder="Checkpoint"
                      name="check"
                      className="w-full p-3 border border-gray-300 rounded outline-none focus:bg-gray-50 ml-3"
                      onChange={(e) => handleAddCheckpoint(e)}
                    />
                  </div>
                </div>
              ) : (
                <div className="mt-10 px-7">
                  <button
                    onClick={() => setIsShowRouteInput((s) => !s)}
                    className="bg-indigo-700 rounded-full hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[400px] w-full ">
                    Add route
                  </button>
                </div>
              )} */}

              {/* <hr className="h-[1px] bg-gray-100 my-14" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { UserProfile };
