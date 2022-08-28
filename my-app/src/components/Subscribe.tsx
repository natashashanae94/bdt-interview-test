import React from "react";

export default function Subscribe() {
    return (
        <div>
             <div className="lg:m-20 lg:p-20 p-8 bg-[#0284c7] lg:rounded-lg">
                <div className="grid lg:grid-cols-2 sm:grid-cols-1">
                    <div className="col-span-1 text-white text-left sm:m-8">
                        <div className="text-3xl font-bold px-2">Subscribe to our newsletter</div>
                        <div className="p-2">Get updates, learn about job opportunities, and stay in the loop on our work to modernize benefits access.</div>
                    </div>
                    <div className="col-span-1 lg:pl-8 grid items-center">
                        <div>
                        <input
                        className=" w-full text-gray-400 text-sm bg-white border-none focus:ring-0 peer rounded-sm p-2"
                        id="name"
                        type="text"
                        placeholder="Email"
                        />
                        </div>
                        <div className="flex flex-wrap gap-4 mt-2 text-center">
                            <a className="block w-full px-6 py-3 text-sm font-medium text-white rounded-full shadow bg-[#0ea5e9] sm:w-auto active:bg-blue-900 hover:bg-blue-900 focus:outline-none focus:ring" href="/get-started">
                                Subscribe
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}