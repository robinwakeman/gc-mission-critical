import React from 'react';
import ReactApexChart from 'react-apexcharts';

function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}

class AreaChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          name: 'Feisal',
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 0,
            max: 20
          })
        },
        {
          name: 'Robin',
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 0,
            max: 35
          })
        },
        {
          name: 'Mohamed',
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 0,
            max: 50
          })
        },
        {
          name: 'Abdoulaye',
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 5,
            max: 30
          })
        }
      ],
      options: {
        chart: {
          type: 'area',
          height: 350,
          stacked: true,
          events: {
            selection: function (chart, e) {
              console.log(new Date(e.xaxis.min))
            }
          },
        },
        colors: ['#008FFB', '#00E396', '#CED4DC'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.8,
          }
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left'
        },
        xaxis: {
          type: 'datetime'
        },
      },


    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
      </div>
    );
  }
}

export default AreaChart;
