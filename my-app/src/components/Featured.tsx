import React from "react";
import DigitalService from "../assets/icon-digital-service.svg";
import HealthCare from "../assets/icon-healthcare.svg";
import Policy from "../assets/icon-policy.svg";

const featuredContent = [
 {icon: DigitalService, title: "Enrollment Services", text:"Every person should easily receive assistance they are eligible for when they need it. To achieve that, we provide data-driven outreach, online tools and assistance in applying over the phone to efficiently connect people to available assistance."},
 {icon: HealthCare, title: "Healthcare Innovation", text:"Healthcare entities have a unique opportunity to connect people to benefits that improve health and reduce unnecassary healthcare costs. We work with health plans, integrated delivery networks, and other healthcare partners to help their members and patients access assistance programs with ease." },
 {icon: Policy, title: "Public Policy & Practice Change", text:"Too often assistance programs are burdensome for families to access and for government agencies to administer. We help government leaders test and adapt policies and practice solutions that bring more equity and efficiency to benefits access."}
]

export default function Featured() {
    return (
        <div className="lg:mx-20 mx-8">
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
                {
                    featuredContent.map(item => {
                        return (
                            <div className="flex flex-1 flex-col justify-between overflow-hidden border border-gray-100 shadow-md h-9/12 lg:my-10 lg:mx-3 my-4 rounded-lg">
                             
                                <div className="icon">
                                    <img className="h-[110px] p-4" src={item.icon} />
                                </div>
                                <div className="px-6 pb-6 flex text-left flex-col">
                                    <h5 className="lg:text-3xl text-2xl text-blue-700 font-bold">
                                        {item.title}
                                    </h5>
                                   
                                    <p className="lg:text-lg text-md font-md mt-2 text-sm text-blue-700">
                                       {item.text}
                                    </p>

                                </div>
                                
                                <div className="border-t-2 border-gray-300 p-4 inline-block relative bottom-0 w-full font-medium border-t-1 border-blue-900 text-blue-400">
                                    Learn more
                                    <span aria-hidden="true">&rarr;</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div> 
    );
}