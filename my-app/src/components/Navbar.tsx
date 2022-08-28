import React from "react";

import logo from "../assets/logo-header-benefitsdatatrust-cefdfd19d85b5e72c484b6ad5f0bb926.png";

export default function Navbar() {
  return (
    <header className="bg-white">
      <div className="bg-gray-100 text-blue-900">
        <div className="lg:mx-20 mx-8 lg:flex lg:justify-end hidden">
          <div className="p-2 font-bold text-xs">Contact Us</div>
          <div className="p-2 bg-lime-400 font-bold text-xs">Join the team</div>
        </div>
      </div>
      <div className="lg:mx-20 mx-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-300" href="/">
              <span className="sr-only">Home</span>
              <div><img src={logo} className="h-10"/></div>
            </a>
          </div>

          <div className="md:flex hidden md:items-center md:gap-12">
            <nav className="hidden md:block" aria-labelledby="header-navigation">
              <h2 className="sr-only" id="header-navigation">Header navigation</h2>

              <ul className="flex items-center gap-6 text-sm">
              { ["Who We Are", "What We Do", "Get Help", "News & Insights" ].map((navItem) => {
                    if(navItem === "Who We Are" || navItem === "What We Do") {
                      return (
                        <li>
                        <a className="text-white transition hover:text-white/75" href="/">
                          <div className="inline-flex items-stretch bg-white">
                            <a
                              href="/edit"
                              className="text-blue-900 font-bold px-4 py-2 text-sm"
                            >
                              {navItem}
                            </a>
      
                            <div className="relative">
                              <button
                                type="button"
                                className="inline-flex items-center justify-center h-full text-gray-600 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-4 h-4"
                                  viewBox="0 0 20 20"
                                  fill="#152E5F"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </button>
      
      
                            </div>
                          </div>
                        </a>
                      </li>
                      )
                    } else {
                      return  (
                        <li>
                        <a className="text-blue-900 font-bold transition hover:text-white/75" href="/">
                          {navItem}
                        </a>
                      </li>
                      )
                    }
                  }) }
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <label className="relative block p-2 border-2 border-gray-200 bg-gray-300 rounded-full" htmlFor="name">
                <input
                  className=" w-full p-0 text-sm bg-gray-300 border-none focus:ring-0 peer rounded-full"
                  id="name"
                  type="text"
                  placeholder="Search"
                />
              </label>
            </div>
            
          </div>
          <svg className="lg:hidden sm:block" width="40px" height="40px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <title>Icon/01 Standard/menu</title>
              <g id="Icon/01-Standard/menu" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <path d="M56,44 C58.209139,44 60,45.790861 60,48 C60,50.209139 58.209139,52 56,52 L8,52 C5.790861,52 4,50.209139 4,48 C4,45.790861 5.790861,44 8,44 L56,44 Z M56,28 C58.209139,28 60,29.790861 60,32 C60,34.209139 58.209139,36 56,36 L8,36 C5.790861,36 4,34.209139 4,32 C4,29.790861 5.790861,28 8,28 L56,28 Z M56,12 C58.209139,12 60,13.790861 60,16 C60,18.209139 58.209139,20 56,20 L8,20 C5.790861,20 4,18.209139 4,16 C4,13.790861 5.790861,12 8,12 L56,12 Z" id="🎨-Fill" fill="#2071BD"></path>
              </g>
            </svg>
        </div>
      </div>
    </header>

  );
}