import React from "react";
import { RiCopyrightFill } from "react-icons/ri";
import { BiCopyright } from "react-icons/bi";
import { PiGreaterThan } from "react-icons/pi";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-zinc-100  md:py-1 pt-10 ">
      <div className="max-w-[1400px]  mx-auto md:flex items-center md:justify-around text-start md:m-10 ">
        <div className=" flex-col items-center text-center md:text-start">
          <a href="#Header" className="text-3xl font-bold">
            Quick<span className="text-orange-500">B</span>asket
          </a>
          <p className="my-5 ">
            Bred for high content of benificial substances.<br/> Our products are all
            fresh and healthy.
          </p>
          <p className="md:flex flex justify-center md:justify-start font-semibold ">
            {/* 2024<RiCopyrightFill/> Created By 😏Yogesh!. All Right Reaserved */}
          </p>
        </div>
        <div className="justify-center text-center md:text-start m-20">
          <h3 className="font-bold text-2xl mb-5 md:-mt-8 ">Company</h3>
          <ul className="md:mt-5 font-semibold ">
            <span className="">
              <Link to="/Aboutus">
              <li className="mb-5 ">About</li>
            </Link>
            <Link to="/FAQs">
              <li>FAQ's</li>
            </Link> </span>
          </ul>
        </div>
        {/* support  */}
        <div className="text-center md:text-start p-10">
          <h3 className="font-bold text-2xl  text-center md:text-start md:m-auto ">Support</h3>
          <ul className="font-semibold">
            <a href="#">
              <li className="mt-6 mb-5">Support center</li>
            </a>
            <a href="#">
              <li className="mb-5">Feedback</li>
            </a>
            <a href="/contect">
              <li>Contact us</li>
            </a>
          </ul>
        </div>
        <div className="my-auto text-center md:text-start mt-20  md:mt-auto md:ml-auto">
          <h3 className="font-bold text-2xl   ">Stay Connected</h3>
          <p>Question or Feedback?<br /> We'd love to hear from you</p>
          <div className="flex mt-15 justify-center items-center ">
            <input 
              type="text"
              name="text"
              id="text"
              placeholder="search..."
              autoComplete="off"
              className=" focus:outline-none "/>

            <button className="bg-orange-500 text-white w-10 h-9 flex justify-center items-center rounded-full text-xl">
              <PiGreaterThan />
            </button>
          </div>
        </div>
     
      </div>
         <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2026 © Yogesh 💯🔥 All Rights Reserved 🛑
      </div>
    </footer>
  );
}

export default Footer;
