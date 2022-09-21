import React from "react";
import Chart from "chart.js";
import { amber } from "tailwindcss/colors";


export default function CardBarChart(props) {
  // console.log("Passed into chart component:", props);
  const labels = Object.keys(props.results);
  const values = Object.values(props.results);

  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            data: values,
            backgroundColor: [ // https://www.colorsandfonts.com/color-palettes
              '#FF2442',
              '#3D84B8',
              '#C67ACE',
              '#FFC600',
              '#0C1E7F',
              '#FF008E',
              '#99FFCD'
            ],
            borderColor: 'rgba(0, 0, 0, 1)',
            fill: true,
            barThickness: 32,
          }
        ],
      },
      options: {
        legend: {
          display: false
        },
        hover: false,
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Category",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                // zeroLineBorderDash: [2],
                // zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: false,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                // zeroLineBorderDash: [2],
                // zeroLineBorderDashOffset: [2],
              },
              ticks: {
                beginAtZero: true,
                max: 30
              }
            },
          ],

        },
      },
    };

    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);

  return (
    <>

      <div>
        <h4 className="text-blueGray-700 text-x font-semibold mt-6 align-middle justify flex">
          Higher values on this graph indicate that you are doing well in that category, great job!
        </h4>

        <div className="relative flex flex-col min-w-0 break-words bg-blueGray-100 w-full mb-6 shadow-lg rounded-lg">
          <div className="rounded-t mb-0 px-4 py-1 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">

              </div>
            </div>
          </div>
        </div>

        <div className="p-4 flex-auto shadow-xl">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}