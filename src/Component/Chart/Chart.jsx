import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

import "./Chart.css";

const Chart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Monthly User",
        data: [31, 40, 28, 51, 95, 85],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: ["Jan", "Fab", "Apr", "May", "Jun", "July"],
      },
      tooltip: {
        x: {
          format: "Monthly",
        },
      },
    //   fill: {
    //     colors: ["#F44336", "#E91E63", "#9C27B0"],
    //   },
      dataLabels: {
        style: {
          colors: ["#E621C9", "#E621C9", "#9C27B0"],
        },
      },
      markers: {
        colors: ["#F44336", "#E91E63", "#FFBF83"],
      },
    //   grid: {
    //     row: {
    //       colors: ["#F44336", "#E91E63", "#9C27B0"],
    //     },
    //     column: {
    //       colors: ["#F44336", "#E91E63", "#9C27B0"],
    //     },
    //   },
    },
    /*  */
  });

  return (
    <div>
      <div id="chart" className="card">
        <h2>Product Stocks</h2>
        <p>Month-to-month Comparison</p>
        <div class="pulse"></div>
        <div class="chart-area">
          <div class="grid2"></div>
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="area"
            height={350}
            width={350}
          />
        </div>
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Chart;
