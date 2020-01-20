import React from 'react';
import ReactApexChart from 'react-apexcharts';

 class RadialBarMulti extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [44, 55, 67, 83],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        colors: ['#024571', '#5DC1BE', '#F6CF22', '#7E0C33'],
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '16px',
              },
              value: {
                fontSize: '16px',
              },
              total: {
                show: true,
                label: 'Tasks Complete',
                formatter: function (w) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return 249
                }
              }
            }
          }
        },
        labels: ['Design', 'Development', 'Marketing', 'Analysis'],
      },


  };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
      </div>
    );
  }
}

export default RadialBarMulti;
