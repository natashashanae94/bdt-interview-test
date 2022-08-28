import React from "react";

import heroImg from "../assets/images/grannybabes.png";
import bannerImg from "../assets/images/hero-header-fam-square.jpeg";

export default function Banner() {
   return(<section className="overflow-hidden relative w-full lg:h-full bg-gradient-to-r from-indigo-900 via-blue-800 to-sky-500 z-003 sm:flex sm:flex-col sm:h-auto">
   {/* {<img
       className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
       src="https://images.unsplash.com/photo-1601758003122-53c40e686a19"
       alt="Couple on a bed with a dog" 
   />} */}

   <div className="relative max-w-screen-xl lg:mx-20 mx-8 py-12 lg:h-screen lg:items-center lg:flex z-002 lg:w-50 sm:w-full">
       <div className="max-w-xl text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
                Helping people today, modernizing benefits access for tomorrow 
            </h1>

            <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl text-white">
                Each year, $60 billion in food, healthcare, and other assistance goes untapped--we are committed to closing
                that gap to reduce hunger and poverty and build pathways to economic mobility.
            </p>

            <div className="flex flex-wrap gap-4 mt-8 text-center">
                <a className="block cursor-pointer w-full px-6 py-3 text-sm font-medium text-white rounded-full shadow bg-blue-400 sm:w-auto active:bg-blue-900 hover:bg-blue-900 focus:outline-none focus:ring" href="/get-started">
                Learn More
                </a>
            </div>
       </div>
   </div>
   <div className="lg:w-50 sm:w-full">
        <img src={heroImg} className="z-001 lg:block hidden" style={{position:"absolute", top:"-100px", right: "-150px", height: "120%"}}/>
        <img src={bannerImg} className="z-001 lg:hidden sm:block"/>
   </div>

</section>); 

}