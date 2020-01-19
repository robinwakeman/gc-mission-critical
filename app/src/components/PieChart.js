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
        colors: ['#AF3C43', '#5DC1BE', '#C9DF61'],
        labels: ['To Do', 'In Progress', 'Done'],
        responsive: [{
          breakpoint: 400,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'left'
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
