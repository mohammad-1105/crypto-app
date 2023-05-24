import React from "react";
import { Link } from "react-router-dom";



const CoinsCard = ({
  img,
  id,
  symbol,
  price,
  rank,
  priceChangeIn24h,
  currencySymbol,
}) => {
  return (
    <>
      <Link className="w-full md:w-[180px] md:h-[180px]"
        to={`/coin/${id}`}
      >
        <div className=" cursor-pointer flex md:w-[180px] md:h-[180px] w-full items-center md:flex-col gap-2 md:p-4  shadow-[0px_2px_9px_silver] md:hover:scale-110 hover:scale-105 hover:ease-in-out duration-300 md:rounded-2xl rounded-md py-4 px-2 justify-between select-none">
          <p className="font-bold md:hidden">{rank}</p>
          <div className="flex justify-center items-center">
            <img
              className="rounded-full md:rounded-none md:w-14 md:h-14 w-6 h-6"
              src={img}
              alt=""
            />
            <p className="font-customFont text-sm text-center md:hidden  rounded-sm px-1 line-clamp-1 ">
              {symbol}
            </p>
          </div>
          <p className="font-bold hidden md:block">{rank}</p>

          <p className="font-customFont text-center bg-yellow-500 md:block hidden hover:bg-yellow-600 hover:underline rounded-sm px-1 line-clamp-1 ">
            {symbol}
          </p>

          <h1 className="text-center font-medium font-customFont">{`${currencySymbol} ${price}`}</h1>
          <h1 className={`text-center md:hidden font-medium font-customFont ${priceChangeIn24h > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {`% ${priceChangeIn24h === null ? "NA": priceChangeIn24h}`}
          </h1>
        </div>
      </Link>
    </>
  );
};



export default CoinsCard;
