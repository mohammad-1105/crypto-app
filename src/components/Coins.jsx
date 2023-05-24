import axios from "axios";
import React, { useEffect, useState } from "react";
import server from "..";
import CoinsCard from "./CoinsCard";
import DataLoading from "./DataLoading";
import Error from "./Error";

const Coins = () => {
  const [currency, setCurrency] = useState("usd");
  const [page, setPage] = useState(1);
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

    const pagination = (page) => {
      setPage(page);
      setLoading(true);
     
    }

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

  const paginationBtn = new Array(20).fill(1)
  

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data: coinsData } = await axios.get(
          `${server}/markets?vs_currency=${currency}&page=${page}`
        );
       
        setError(false);
        setLoading(false);
        setCoins(coinsData);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <Error message={"Error While Fetching Coins"} />;

  return (
    <>
      <div className="w-full py-10 px-3 flex md:flex-row flex-col items-center md:justify-center gap-3 ">
        <h1 className="font-customFont font-medium">Currency Type</h1>
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

      <div className="mt-12 md:hidden cursor-pointer flex items-center md:flex-col gap-2  shadow-[0px_2px_9px_silver] rounded-md p-3 justify-between select-none w-[90%] mx-auto font-bold">
        <p>Rank</p>
        <p>Coins</p>
        <p>Price</p>
        <p>24h</p>
      </div>

      <div>
        {loading ? (
          <DataLoading />
        ) : (
          <div className="py-12">
            <div className="   md:p-20 flex flex-wrap justify-around gap-12 md:w-[70%] w-[90%] mx-auto  ">
              {coins.map((i) => (
                <CoinsCard
                  id={i.id}
                  currencySymbol={currencySymbol}
                  rank={i.market_cap_rank}
                  key={i.id}
                  img={i.image}
                  symbol={i.symbol}
                  price={i.current_price}
                  priceChangeIn24h={i.price_change_percentage_24h}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-[90%] mx-auto my-14 py-5 px-3 flex overflow-x-auto">
        {paginationBtn.map((items, index) => (
          <button key={index} onClick={()=> pagination(index + 1)} className="currencySymbolBtn">
          {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Coins;
