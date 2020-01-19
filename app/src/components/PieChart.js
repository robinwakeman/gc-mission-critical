import React from 'react';
import ReactApexChart from 'react-apexcharts';

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [44, 55, 13],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['To Do', 'In Progress', 'Done'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },


    };
  }
  render() {
    return (
      <div id="chart">
      <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
    </div>
    );
  }
}

export default PieChart;
