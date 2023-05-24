import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData1 from "../assets/cryptocurrency-bitcoin-working-loop.json";
import animationData2 from "../assets/cryptocurrenies.json";
import animationData3 from "../assets/cryptocurrency-status.json";
import animationData4 from "../assets/cryptocurrency-wallet.json";

// importting Images here

import mobileHomeImg from "../assets/homeMobileImg.jpg";
import btcImg from "../assets/btc.png";

const Home = () => {
  return (
    <div className=" h-auto w-full">
      <div>
      
        <img
          className="object-cover hidden md:block h-[95vh] w-full"
          src={'https://i.pinimg.com/originals/4f/7f/3e/4f7f3e2d07a072b91189d1d89901a304.jpg'}
          alt="Home Banner"
        />
     
        <img
          className="object-cover w-full h-[90vh] md:hidden rounded-b-[60px]"
          src={mobileHomeImg}
          alt="Home Banner"
        />
      </div>


      <div className="flex flex-col md:flex-row md:justify-around items-center flex-wrap md:gap-14 py-32">
        <div className="flex flex-col items-center gap-20">
          <motion.div
            animate={{
              translateY: "-20px",
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
            }}
          >
            <img
              className="w-52 object-cover grayscale-[70%]"
              src={btcImg}
              alt="BitcoinImage"
            />
          </motion.div>
          <div className="-mt-20 pb-12 md:hidden">
            <h1 className="text-gray-400 text-lg tracking-[4px] font-mono font-bold text-center">
              World's leading Cryto Currency
            </h1>
          </div>
        </div>

        <div className="mb-8">
          <div className="contrast-125 flex flex-col items-center md:w-52 gap-10">
            <Lottie animationData={animationData1} />
          </div>
        </div>
        <div className="mb-8">
          <div className="contrast-125 flex flex-col items-center md:w-52 gap-10">
            <Lottie animationData={animationData2} />
          </div>
        </div>
        <div className="mb-8">
          <div className="contrast-125 flex flex-col items-center gap-10 md:w-52 p-12">
            <Lottie animationData={animationData3} />
          </div>
        </div>
        <div className="">
          <div className="contrast-125 flex flex-col items-center md:w-52 gap-6 pb-12 ">
            <Lottie animationData={animationData4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;




