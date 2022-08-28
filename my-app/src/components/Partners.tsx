import React from "react";
import PartnersImg from "../assets/images/christina-wocintechchat-com-VpcgTEKerEQ-unsplash.jpg"

export default function Partners() {
    return(
        <div className="lg:mx-20 mx-8">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-center items-center"> 
                <div className="col-span-1 lg:order-1 order-2"> 
                    <div className="lg:pr-8 pt-8">
                        <div className="text-4xl mb-4 font-bold text-left text-blue-700">Our Partners</div>
                        <div className="text-left text-lg font-md">Together with a national network of partners, we work to influence change and build solutions to provide more dignified, equitable, and efficient benefits access.</div>
                        
                        <div className="flex flex-wrap gap-4 mt-8 text-center">
                            <a className="block w-full px-6 py-3 text-sm font-medium text-white rounded-full shadow bg-blue-400 sm:w-auto active:bg-blue-900 hover:bg-blue-900 focus:outline-none focus:ring" href="/get-started">
                            Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:order-2 order-1">
                    <img id="main_image" className="rounded-lg sm:mt-8"  src={PartnersImg} />
                </div>
            </div>
        </div>
    );
}
