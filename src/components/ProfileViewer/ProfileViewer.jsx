import React from 'react';
import { Link } from 'react-router-dom';

const ProfileViewer = ({
  id = 'fddf',
  userImg = 'https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png',
  userName = 'dummyUser',
  designation = 'Professional',
  userStatus = 'New in the city',
  source = 'Karnal',
  destination = 'Delhi',
}) => {
  return (
    <div className=' rounded m-4 flex flex-col w-[90%] shadow-lg py-4 px-5  bg-white'>
      <div className='flex items-start justify-between'>
        <div className='flex items-center mb-4 lg:mb-0 mr-10'>
          <div className='w-14 h-14 bg-cover rounded-md mr-3'>
            <img
              src={userImg}
              alt={userName}
              referrerPolicy='no-referrer'
              className='rounded-full h-full w-full overflow-hidden shadow'
            />
          </div>
          <div>
            <p className='text-sm font-bold leading-4 text-gray-800'>
              {userName}
            </p>
            <p
              className='text-xs leading-3 text-gray-500 
                                 pt-2'
            >

              {designation}
            </p>
          </div>
        </div>
        <p className='pt-4 text-xs leading-4 text-gray-600'>{userStatus}</p>
      </div>
      <div className='sm:flex items-center justify-between w-full sm:px-24 pt-6'>
        <div className='sm:block flex w-full items-center'>
          <div className='sm:w-full w-2 sm:h-2 h-64 bg-gray-100 flex sm:flex-row flex-col items-center justify-between'>
            <div className='w-4 h-4 bg-gray-800 dark:bg-gray-100 rounded flex items-center justify-center'>
              <svg
                className='text-white dark:text-black'
                xmlns='http://www.w3.org/2000/svg'
                width={12}
                height={12}
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M5 12l5 5l10 -10' />
              </svg>
            </div>
            <div className='w-4 h-4 bg-indigo-700 rounded flex items-center justify-center  md:ml-8 lg:ml-20' />
          </div>
        </div>
      </div>
      <div className='m-2 sm:block hidden mx-16'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col items-center'>
            <p className='text-sm font-medium leading-4 text-indigo-700 '>
              {source}
            </p>
          </div>
          <div className='flex flex-col items-center pl-10 md:pl-8 lg:pl-20'>
            <p className='text-sm font-medium leading-4 text-indigo-700'>
              {destination}
            </p>
          </div>
        </div>
      </div>


      <div className="flex items-end justify-center">
        <Link
          to={`/explore/${id}`}
          className=" text-xs font-medium leading-3 text-white py-3 px-4 rounded bg-indigo-700 focus:outline-none hover:opacity-90"
        >
          Open Profile Page
        </Link>
      </div>
    </div>
  );
};

export { ProfileViewer };
