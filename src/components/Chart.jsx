import React from "react";
import {
  Chart as chartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  LineElement,
  PointElement,
  Title,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

chartJS.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  LineElement,
  PointElement,
  Title,
  Legend
);

const Chart = ({ arr = [], currency, days }) => {
  const date = [];
  const prices = [];

  

  for (let i = 0; i < arr.length; i++) {
    if (days === "24h") {
      date.push(new Date(arr[i][0]).toLocaleTimeString());
    } else {
      date.push(new Date(arr[i][0]).toLocaleDateString());
    }

    prices.push(arr[i][1]);
  }

  return (
    <Line
      options={{
        responsive: true,
      }}
      data={{
        labels: date,
        datasets: [
          {
            label: `Price in ${currency}`,
            data: prices,
            borderColor: "#55efc4",
            backgroundColor: "violet",
            pointBackgroundColor:'red',
            
          },
        ],
      }}
    />
  );
};

export default Chart;
