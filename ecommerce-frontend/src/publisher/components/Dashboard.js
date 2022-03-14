/**
 * author: akash trivedi
 * date-created: 10-march-2022
 * functionality: render the dashboard for the pubsliher
 * caller-function: 
 */
import React from 'react';
import UpdateProfile from './UpdateProfile';

export default function Dashboard(props) {
  let componentMap = props.componentMap;
  let [activeLayoutName, updateDashboard] = React.useState("mainDashboard");
  
  function updateActiveLayout(event) {
    console.log(event.target.name);
    updateDashboard(event.target.name);
  }
  return (
    <div>
      <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
        <div className="flex items-start justify-between">
          <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
            <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
              <div className="flex items-center justify-center pt-6">
                <svg width="35" height="30" viewBox="0 0 256 366" version="1.1" preserveAspectRatio="xMidYMid">
                  <defs>
                    <linearGradient x1="12.5189534%" y1="85.2128611%" x2="88.2282959%" y2="10.0225497%" id="linearGradient-1">
                      <stop stopColor="#FF0057" stopOpacity="0.16" offset="0%">
                      </stop>
                      <stop stopColor="#FF0057" offset="86.1354%">
                      </stop>
                    </linearGradient>
                  </defs>
                  <g>
                    <path d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z" fill="#001B38">
                    </path>
                    <circle fill="url(#linearGradient-1)" transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) " cx="147.013244" cy="147.014675" r="78.9933938">
                    </circle>
                    <circle fill="url(#linearGradient-1)" opacity="0.5" transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) " cx="147.013244" cy="147.014675" r="78.9933938">
                    </circle>
                  </g>
                </svg>
              </div>
              <nav className="mt-6">
                <div>
                  <span className="w-full font-thin camelcase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500">
                    <a className="text-left">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                        </path>
                      </svg>
                    </a>
                    <a className="mx-4 text-sm font-normal" name="dashboardMain" onClick={updateActiveLayout}>
                      Dashboard
                    </a>
                  </span>
                  <span className="w-full font-thin camelcase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500">
                    <a className="text-left">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                        </path>
                      </svg>
                    </a>
                    <a className="mx-4 text-sm font-normal" name="salesReport" onClick={updateActiveLayout}>
                      Sales Report
                    </a>
                  </span>
                  <span className="w-full font-thin camelcase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500">
                    <a className="text-left">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                        </path>
                      </svg>
                    </a>
                    <a className="mx-4 text-sm font-normal" name="updateProfile" onClick={updateActiveLayout}>
                      Update Profile
                    </a>
                  </span>
                </div>
              </nav>
            </div>
          </div>
          <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <header className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
              <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                  <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                    <span>Here will be the sales data for the pubslihers</span>
                  </div>
                  <div className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                    <a className="block relative">
                      <img alt="profile-pic" className="mx-auto object-cover rounded-full h-10 w-10 " />
                    </a>
                  </div>
                </div>
              </div>
            </header>
            <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
              <div className="flex flex-col flex-wrap sm:flex-row ">
                <div>
                  {
                    <UpdateProfile />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div >
  )
}
