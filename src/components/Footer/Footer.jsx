import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="pt-12">
    <footer id="footer" className="relative z-50 dark:bg-gray-900 ">
        <div className="py-16 flex flex-col justify-center items-center">
        <div className=" flex space-x-3 items-center">
                        <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z" fill="#FFFFFF" />
                        </svg>

                        <Link to="/explore" className=" font-normal text-2xl leading-6 text-white">RouteBuddies</Link>
                    </div>
            <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">2022 RouterBuddies @ All Rights Reserved.</p>
        </div>
        <div className=" border-t border-b border-gray-200 dark:border-gray-700 py-16">
            <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
                <div className="lg:flex">
                    <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                        <div className="w-full lg:w-1/2 px-6">
                            <ul>
                                <li>
                                    <Link to="/">
                                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">Home</a>
                                    </Link>
                                </li>
                                <li className="mt-6">
                                    <Link to="/settings">
                                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">Settings</a>
                                    </Link>
                                </li>
                                <li className="mt-6">
                                    <Link to="/matches">
                                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">Matches</a>
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 px-6">
                            <ul>
                                <li>
                                    <a rel='noreferrer' target="_blank" href="javascript:void(0)">
                                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">Contact us</a>
                                    </a>
                                </li>

                                <li className="mt-6">
                                    <a rel='noreferrer' target="_blank" href="https://github.com/GuptaEesh/route-buddies">
                                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">Contribute</a>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex">
                        <div className="w-full lg:w-1/2 px-6">
                            <ul>
                                <li>
                                    <a rel='noreferrer' target="_blank" href="javascript:void(0)" className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                                        Privacy policy
                                    </a>
                                </li>
                                <li className="mt-6">
                                    <a rel='noreferrer' target="_blank" href="javascript:void(0)">
                                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">Terms of service</a>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                            <div className="flex items-center mb-6">
                                <a rel='noreferrer' target="_blank" href="https://github.com/GuptaEesh/route-buddies">
                                    <div className="text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand ">
                                        <svg className="footer-icon feather feather-github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </div>
                                </a>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
  )
}

export {Footer}
