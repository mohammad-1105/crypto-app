import React, { useEffect, useState } from "react";
import axios from "axios";
import ExchangeCard from "./ExchangeCard";
import DataLoading from "./DataLoading";
import Error from "./Error";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error , setError]= useState(false)

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/exchanges?per_page=250"
        );
        setError(false);
        setLoading(false);
        setExchanges(data);
        
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    };
    fetchExchanges();
  }, []);

  if(error) return (<Error message={"Error While Fetching Exchanges"}/> )


  return (
    <div>
     
      {loading ? (
        <DataLoading />
      ) : (
        <>
          <div className=" py-12">
            <div className=" md:p-20 flex flex-wrap justify-around gap-12 md:w-[70%] w-[90%] mx-auto ">
              {exchanges.map((i) => (
                <ExchangeCard
                  name={i.name}
                  img={i.image}
                  rank={i.trust_score_rank}
                  url={i.url}
                  key={i.id}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Exchanges;
