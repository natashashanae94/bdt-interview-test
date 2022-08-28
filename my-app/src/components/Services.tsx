import React, { useState } from "react";
import governmentImg from "../assets/images/pexels-aaron-kittredge-129112.jpg"
import policyImg from "../assets/images/pexels-antoni-shkraba-5816307.jpg"

const myButtons = [
    {
      filterKey: "Government",
      title: "Government",
      text: "Government",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: governmentImg,
      link1: "The President's New Healthcare Plan",
      link2:"How to Get Your Petition Noticed",
      link3:"Call Our Services"
    },
    
    {
      filterKey: "Policy",
      title: "Policy Makers",
      text: "Policy Makers",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: policyImg,
      link1: "Our State Partners",
      link2:"Policy-related resources",
      link3:"Contact Us"
    },
  ];

export default function Services() {
    const [buttons, setButtons] = useState(myButtons);

    function handleClick(filterKey: string) {

        const newArray = myButtons.filter((myButton) => {
            return filterKey === myButton.filterKey
        });

        setButtons(newArray);
    }

    const text = ``
    
    return (
        <>
            <div className="bg-gray-100">
                <div className="lg:mx-20 mx-8 lg:pb-4 text-left border-b-2 border-gray-300 sm:text-left">
                    <div className="lg:grid lg:grid-cols-3 sm:grid-none items-center lg:p-8 p-4">
                        <div className="col-span-1 text-3xl text-blue-700 font-bold">How Can We Help You.</div>
                        <div className="col-span-2 lg:pl-4">
                            {myButtons.map((item, index) => {
                                return (
                                    <button 
                                        key={index} 
                                        className={`mr-2 mt-4 lg:px-6 lg:py-2 px-4 py-1 border-2 text-sm font-medium border border-gray-700 rounded-full hover:bg-blue-900 hover:text-white active:bg-blue-900 active:text-white focus:outline-none ${ buttons[0].filterKey === item.filterKey ? "bg-blue-900 text-white": "text-blue-900"}`}
                                        onClick={() => {
                                            handleClick(item.filterKey);
                                        }}
                                    >
                                        {item.text}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="lg:mx-20">
                    <div className="lg:grid lg:grid-cols-3 sm:grid-cols-1 sm:text-left p-8">
                        <div className="col-span-1 lg:border-r-2 border-gray-300 pr-4">
                            <img id="main_image" src={ buttons[0].img } className="rounded-md h-[250px]"/>
                        </div>
                        <div className="col-span-2 lg:pl-4 lg:pt-0 pt-4 text-left">
                            <div className="text-2xl font-bold text-blue-700">
                                { buttons[0].title }
                            </div>
                            <div className="text-left text-blue-700">
                                { buttons[0].info }
                            </div>
                            <div className="flex flex-col mt-2">
                                <a href="#" className="font-bold text-blue-400 mb-4">{ buttons[0].link1 } <span>&#8594;</span></a>
                                <a href="#" className="font-bold text-blue-400 mb-4">{ buttons[0].link2 } <span>&#8594;</span></a>
                                <a href="#" className="font-bold text-blue-400 mb-4">{ buttons[0].link3 } <span>&#8594;</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

 