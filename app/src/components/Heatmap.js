import React from 'react';
import ReactApexChart from 'react-apexcharts';

function generateData(n, limits) {
  let data = [];
  let range = limits.max - limits.min;
  for(let i=0; i<n; i++) {
    let dataPoint = Math.floor(Math.random() * range) + limits.min;
    data.push(dataPoint);
  }
  return data;
}

class Heatmap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
          name: 'Jan',
          data: generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'Feb',
          data: generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'Mar',
          data: generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'Apr',
          data: generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'May',
          data: generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'Jun',
          data: generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'Jul',
          data: generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'Aug',
          data: generateData(20, {
            min: -30,
            max: 55
          })
        },
        {
          name: 'Sep',
          data: generateData(20, {
            min: -30,
            max: 55
          })
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'heatmap',
        },
        plotOptions: {
          heatmap: {
            shadeIntensity: 0.5,

            colorScale: {
              ranges: [{
                  from: -30,
                  to: 5,
                  name: 'Low',
                  color: '#C9DF61'
                },
                {
                  from: 6,
                  to: 20,
                  name: 'Medium',
                  color: '#5DC1BE'
                },
                {
                  from: 21,
                  to: 45,
                  name: 'High',
                  color: '#F6CF22'
                },
                {
                  from: 46,
                  to: 55,
                  name: 'Extreme',
                  color: '#AF3C43'
                }
              ]
            }
          }
        },
        dataLabels: {
          enabled: false
        },
      },


    };
  }

  render() {
    return (
      <React.Fragment>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" height={350} />
        </div>
      </React.Fragment>
    );
  }
}

export default Heatmap;