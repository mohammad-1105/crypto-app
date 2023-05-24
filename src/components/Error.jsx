import React from "react";
import Lottie from "lottie-react";
import errorAnimation from "../assets/error.json";

const Error = ({ message }) => {
  return (
    <div className=" h-[90vh] flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className=" font-extrabold text-xl text-center mt-20 ">{message}</h1>
        <div>
          <Lottie className="md:w-96 md:h-96 w-40 h-40 " animationData={errorAnimation} />
        </div>
      </div>
    </div>
  );
};

export default Error;
