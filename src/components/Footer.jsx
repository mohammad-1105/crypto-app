import React from "react";
import { ImLocation } from "react-icons/im";
import { HiPhoneMissedCall } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full h-auto p-8 flex md:flex-row flex-col">
      <div className="md:w-full flex flex-col md:gap-5 gap-3 md:ml-8 mb-10 md:mb-0">
        <div className="flex items-center gap-5">
          <ImLocation className="text-2xl md:text-3xl text-white" />
          <div>
            <p className=" text-sm md:text-lg text-gray-400 font-bold">
              11, Revolution street
            </p>
            <p className="text-lg md:text-xl text-white font-extrabold">
              Near, Your Heart ❤️
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <HiPhoneMissedCall className="text-2xl md:text-3xl text-white" />
          <div>
            <p className="font-customFont text-lg md:text-xl text-white font-extrabold">
              +91&nbsp;7464029673
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <MdEmail className="text-2xl md:text-3xl text-white" />
          <div className="">
            <div className="text-sm md:text-xl font-extrabold text-indigo-500 flex flex-wrap">
              <span>mohammad</span><span>amaan1105</span><span>@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:items-center md:w-[50%]  md:mr-14">
        <h1 className="font-customFont text-lg md:text-2xl text-white  ">
          About the company
        </h1>
        <div className="border-b-2 w-40 border-yellow-500  "></div>
        <p className="text-[18px] md:text-xl text-gray-400 tracking-wider">
        Welcome to our cutting-edge company, the driving force behind a revolutionary crypto currency app. We are passionate about providing users with real-time market data and empowering them to navigate the ever-evolving world of digital currencies. Our app combines intuitive design with comprehensive exchange rankings, giving users the tools they need to make informed decisions. Join us on our mission to redefine the crypto trading experience and stay ahead of the curve in this exciting industry.
        </p>

        <div className="flex gap-3">
          <a href="https://www.facebook.com/mohammad-1105/">
            <AiFillFacebook className="md:w-15 md:h-15 w-10 h-10" />
          </a>
          <a href="https://twitter.com/amaan_1105">
            <AiFillTwitterSquare className="md:w-15 md:h-15 w-10 h-10" />
          </a>
          <AiFillLinkedin className="md:w-15 md:h-15 w-10 h-10" />
          <a href="https://github.com/mohammad-1105">
            <AiFillGithub className="md:w-15 md:h-15 w-10 h-10" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
