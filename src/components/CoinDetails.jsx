import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import server from "..";
import DataLoading from "./DataLoading";
import Error from "./Error";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Chart from '../components/Chart'

const CoinDetails = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [coins, setCoins] = useState({});
  const [days, setDays] = useState("24h");
  const [chartData, setChartData] = useState([]);

  const params = useParams();

  const [currency, setCurrency] = useState("usd");
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  // currency symbol button functions

  const toINR = () => {
    setCurrency("inr");
  };
  const toUSD = () => {
    setCurrency("usd");
  };
  const toEUR = () => {
    setCurrency("eur");
  };

// chart data changing on days functions 

const oneDay = () => {
  setDays('24h')

}
const sevenDay = () => {
  setDays(7)

}
const oneMonth = () => {
  setDays(30)

}
const oneYear = () => {
  setDays(365)

}


  useEffect(() => {
    const fetchCoinsData = async () => {
      try {
        const { data } = await axios.get(`${server}/${params.id}`);
        const { data: chartData } = await axios.get(
          `${server}/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        setChartData(chartData.prices);
       

        setLoading(false);
        setError(false);
        setCoins(data);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    };
    fetchCoinsData();
  }, [params, currency, days]);

  if (error) return <Error message={"Error while fetching the Coin Details"} />;

  return (
    <>
      {loading ? (
        <DataLoading />
      ) : (
        <div className="pt-12">
          <div className="select-none opacity-60 font-customFont font-light text-center w-full md:text-sm text-xs italic mb-2  ">
            {`Last Updated On: [ ${Date().split("G")[0]}]`}
          </div>

          <div className=" py-4 px-8 flex  md:flex-row flex-col-reverse items-center gap-4 md:justify-center  md:rounded-lg md:shadow-[0px_2px_2px_silver] md:w-[70%] md:mx-auto ">
            <div className="flex flex-col shadow-[0px_2px_2px_silver] rounded-lg md:shadow-none md:w-[30%] p-5 ">
              <div className="flex items-center justify-around">
                <div>
                  <div className=" ">
                    <img
                      className="md:w-40 md:h-40 w-20 h-20 select-none"
                      src={coins.image.large}
                      alt="coinImage"
                    />
                  </div>
                  <h1 className="font-customFont font-bold ml-4 md:text-xl select-none">
                    {coins.name}
                  </h1>
                </div>
                <span className="ml-6 bg-black rounded-md text-white px-2 py-1 text-lg font-mono font-extrabold">
                  #{coins.market_cap_rank}
                </span>
              </div>

              <div className="flex items-center gap-1 ml-3 mt-3 select-none">
                <h1 className="font-customFont font-bold md:text-xl">{`${currencySymbol} ${coins.market_data.current_price[currency]}`}</h1>
                <span>
                  <AiFillCaretUp
                    className={`text-green-500 text-lg md:text-xl ${
                      coins.market_data.price_change_percentage_24h < 0
                        ? "hidden"
                        : coins.market_data.price_change_percentage_24h
                    } `}
                  />
                </span>
                <span>
                  <AiFillCaretDown
                    className={`text-red-500 text-lg md:text-xl ${
                      coins.market_data.price_change_percentage_24h > 0
                        ? "hidden"
                        : coins.market_data.price_change_percentage_24h
                    } `}
                  />
                </span>
                <span className="text-gray-500 font-customFont">{`% ${coins.market_data.price_change_percentage_24h}`}</span>
              </div>
            </div>

            <div className="md:w-[50%] py-10 px-3 flex md:flex-row flex-col items-center md:justify-center gap-2">
              <h1 className="font-customFont font-medium select-none">
                Currency Type
              </h1>
              <div>
                <button onClick={toINR} className="currencySymbolBtn">
                  inr
                </button>
                <button onClick={toUSD} className="currencySymbolBtn ">
                  usd
                </button>
                <button onClick={toEUR} className="currencySymbolBtn">
                  eur
                </button>
              </div>
            </div>
          </div>

          {/* chart Area  */}

          <div className="my-8 mx-auto max-w-[800px] h-auto px-12 ">
          <Chart
              currency={currencySymbol}
              arr={chartData}
              days={days}
             
            />
          </div>
          <div className="flex justify-center">
          <button onClick={oneDay} type="button" className="currencySymbolBtn">1d</button>
          <button onClick={sevenDay} type="button" className="currencySymbolBtn">7d</button>
          <button onClick={oneMonth} type="button" className="currencySymbolBtn">1m</button>
          <button onClick={oneYear} type="button" className="currencySymbolBtn">1y</button>
           
          </div>

          <section className=" body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 select-none">
                  Market Stats!
                </h1>
                <span className="border-b-2 border-gray-400 w-40 md:w-44 mx-auto -mt-4 "></span>
              </div>
              <div className="flex justify-center items-center flex-wrap w-[90%] mx-auto md:gap-20 gap-5">
                {/* card  */}
                <div className="p-2 md:w-60 w-full">
                  <div className="flex-grow h-full  bg-gray-300 hover:bg-gray-400   select-none flex flex-col items-center justify-center border-gray-200 border p-4 rounded-lg">
                    <h2 className=" border-b-2 pb-1 mb-3 border-green-800 title-font font-medium">
                      All Time High
                    </h2>
                    <p className=" text-lg font-customFont font-bold">
                      {`${currencySymbol} ${coins.market_data.ath[currency]}`}
                    </p>
                  </div>
                </div>
                {/* card  */}
                <div className="p-2 md:w-60 w-full">
                  <div className="flex-grow h-full flex flex-col items-center justify-center border-gray-200   select-none border p-4 rounded-lg  bg-gray-300 hover:bg-gray-400  ">
                    <h2 className=" border-b-2 pb-1 mb-3 border-red-800 title-font font-medium">
                      All Time Low
                    </h2>
                    <p className=" text-lg font-customFont font-bold">
                      {`${currencySymbol} ${coins.market_data.ath[currency]}`}
                    </p>
                  </div>
                </div>
                {/* card  */}
                <div className="p-2 md:w-60 w-full">
                  <div className="flex-grow h-full flex flex-col items-center justify-center border-gray-200 border p-4 rounded-lg  bg-gray-300 hover:bg-gray-400   select-none">
                    <h2 className=" border-b-2 border-black pb-1 mb-3 title-font font-medium">
                      Current Price
                    </h2>
                    <p className=" text-lg font-customFont font-bold">
                      {`${currencySymbol} ${coins.market_data.current_price[currency]}`}
                    </p>
                  </div>
                </div>
                {/* card  */}
                <div className="p-2 md:w-60 w-full">
                  <div className="flex-grow h-full flex flex-col items-center justify-center border-gray-200 border p-4 rounded-lg bg-gray-300 hover:bg-gray-400  select-none">
                    <h2 className=" border-b-2 border-black pb-1 mb-3 title-font font-medium">
                      Max Supply
                    </h2>
                    <p className=" text-lg font-customFont font-bold">
                      {` ${coins.market_data.max_supply}`}
                    </p>
                  </div>
                </div>
                {/* card  */}
                <div className="p-2 md:w-60 w-full">
                  <div className="flex-grow h-full flex flex-col items-center justify-center border-gray-200 border p-4 rounded-lg  bg-gray-300 hover:bg-gray-400   select-none">
                    <h2 className=" border-b-2 border-black pb-1 mb-3 title-font font-medium">
                      Circulating Supply
                    </h2>
                    <p className=" text-lg font-customFont font-bold">
                      {` ${coins.market_data.circulating_supply}`}
                    </p>
                  </div>
                </div>
                {/* card  */}
                <div className="p-2 md:w-60 w-full">
                  <div className="flex-grow h-full flex flex-col items-center justify-center border-gray-200 border p-4 rounded-lg  bg-gray-300 hover:bg-gray-400   select-none">
                    <h2 className=" border-b-2 border-black pb-1 mb-3 title-font font-medium">
                      Total Supply
                    </h2>
                    <p className=" text-lg font-customFont font-bold">
                      {` ${coins.market_data.total_supply}`}
                    </p>
                  </div>
                </div>
                {/* card  */}
                <div className="p-2 md:w-60 w-full">
                  <div className="flex-grow h-full flex flex-col items-center justify-center border-gray-200 border p-4 rounded-lg  bg-gray-300 hover:bg-gray-400  select-none ">
                    <h2 className=" border-b-2 border-black pb-1 mb-3 title-font font-medium">
                      Market Cap
                    </h2>
                    <p className=" text-lg font-customFont font-bold">
                      {`${currencySymbol} ${coins.market_data.market_cap[currency]}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default CoinDetails;
