import React from "react";

const ExchangeCard = ({ name, url, img, rank }) => {
  return (
    <>
      
        <div className=" cursor-pointer flex md:w-[180px] md:h-[180px] w-full items-center md:flex-col gap-2 md:p-4 shadow-2xl dark:hover:shadow-[0px_2px_2px] md:hover:scale-110 hover:scale-105 hover:ease-in-out duration-300 md:rounded-2xl rounded-md p-3 justify-between select-none">
          <div>
            <img className="rounded-full md:rounded-none" src={img} alt="" />
          </div>

         <a href={url} target="blank">
         <p className="font-customFont text-center bg-yellow-500 hover:bg-yellow-600 hover:underline rounded-sm px-1 line-clamp-1 ">
            {name}
          </p>
            </a> 

          <h1 className="text-lg font-bold text-center ">
            Rank {rank}
          </h1>
        </div>
    
    </>
  );
};

export default ExchangeCard;
