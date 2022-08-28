import React from "react";
import FooterLogo from "../assets/bdt-logo-white@2x.png"
import award1 from "../assets/awards/seal-of-transparency.png"
import award2 from "../assets/awards/aicpa.png"
import award3 from "../assets/awards/top-workplaces.png"
import facebook from "../assets/social/facebook.svg"
import linkedin from "../assets/social/linkedin.svg"
import twitter from "../assets/social/twitter.svg"

export default function Footer() {
    return (
      
      <footer className="bg-blue-900"> 
        <div className="lg:mx-20 mx-8 py-16 mx-auto py-16 px-8">
          <div className="lg:flex lg:gap-8">
          
            <div className="grid grid-cols-2 gap-8 mt-8 lg:mt-0 lg:grid-cols-4 lg:gap-y-16">
              
      
              <div className="col-span-1 pt-6 sm:col-span-1">
              <img id="main_image" className="lg:h-[5.3rem]"  src={FooterLogo} />
              </div>
      
              <div className="col-span-2 pt-6 sm:col-span-1">
                <div className="text-left text-gray-100">
                  <p className="text-lg">Center Square West </p>
                  <p className="text-lg"> 1500 Market St, Suite 2800</p>
                  <p className="text-lg">Philadelphia, PA 19102</p>
                  <p className="font-bold py-2 pr-2 pl-0">(215) 207-9100</p>
                  <p>General Inquiries: <span className="font-bold text-gray-100 text-xs">information@bdtrust.org</span></p>
                  <p>Media Inquiries: <span className="font-bold text-gray-100 text-xs">communications@bdtrust.org</span></p>
                </div>
              </div>
      
              <div className="col-span-1 pt-6 sm:col-span-1 text-left">
                <p className="font-bold text-xs tracking-wider text-gray-500 uppercase"> More </p>
      
                <nav className="flex flex-col mt-6 space-y-4 text-sm text-gray-300 font-bold ">
                  <a className="inline-block " href=""> Frequently Asked Questions </a>
                  <a className="inline-block" href=""> Join Our Team </a>
                  <a className="inline-block" href=""> Contact Us </a>
                </nav>
              </div>
      
              <div className="col-span-1 pt-6 sm:col-span-1 text-left">
                <p className="font-bold text-xs tracking-wider text-gray-500 uppercase"> Follow Us </p>
      
                <nav className="flex mt-6 mtext-sm text-gray-300">
                  <a className="inline-block mr-2" href=""><img src={facebook} alt="facebook"/></a> 
                  <a className="inline-block mr-2" href=""><img src={linkedin} alt="linkedin"/></a>
                  <a className="inline-block mr-2" href=""><img src={twitter} alt="twitter"/></a>
                </nav>
              </div>
    
      
         
            </div>
          </div>
      
          <div className="pt-8 mt-12 border-t border-white/10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <p className="text-xs text-center text-gray-100 lg:text-left">
                Copyright &copy; 2022. Benefits Data Trust. All rights reserved. <span className="font-bold">Privacy Policy</span>
              </p>
      
              <nav className="flex justify-center space-x-4 text-xs text-gray-400 lg:justify-end">
                <a href=""><img src={award1} alt="award1" className="h-[4.5rem]"/></a>
                <a href=""><img src={award2} alt="award2" className="h-[4.5rem]"/></a>
                <a href=""><img src={award3} alt="award3" className="h-[4.5rem]"/></a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      
  
    );
}