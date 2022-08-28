import React from "react";

export default function Statistics() {
    return(
        <div className="text-white">
             <div className="lg:m-20 lg:p-20 mb-8 p-8 bg-blue-900 lg:rounded-lg">
                <h1 className="lg:text-5xl text-3xl font-bold pb-10">Our Historic Impact</h1>
                <div className="lg:grid lg:grid-cols-3 sm:grid-none pb-10"> 
                    <div className="col-span-1 text-left border-l-4 border-blue-400 pl-8">
                        <div className="text-5xl font-bold">1.2M+</div>
                        <div>households screened for benefits</div>
                    </div>
                    <div className="col-span-1 text-left border-l-4 border-blue-400 pl-8 mt-2">
                        <div className="text-5xl font-bold">800,000</div>
                        <div>benefit enrollments</div>
                    </div>
                    <div className="col-span-1 text-left border-l-4 border-blue-400 pl-8 mt-2">
                        <div className="text-5xl font-bold">$9B+</div>
                        <div>secured in assistance for families nationwide</div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-8 justify-center text-center">
                    <a className="block w-full px-6 py-3 text-sm font-medium text-white rounded-full shadow bg-blue-400 sm:w-auto active:bg-blue-300 hover:bg-blue-300 focus:outline-none focus:ring" href="/get-started">
                        Learn more about our strategies
                        <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    );
}