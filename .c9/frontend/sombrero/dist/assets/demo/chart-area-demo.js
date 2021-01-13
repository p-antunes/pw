// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1/12", "2/12", "3/12", "4/12", "5/12", "6/12", "7/12",  "8/12", "9/12", "10/12", "11/12", "12/12", "13/12"],
    datasets: [{
      label: "Ocorrências",
      lineTension: 0.3,
      backgroundColor: "rgba(247, 230, 230)",
      borderColor: "rgba(133, 29, 33)",
      pointRadius: 5,
      pointBackgroundColor: "rgb(13, 0, 1)",
      pointBorderColor: "rgba(13, 0, 1",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(56, 4, 6)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [10, 15, 12, 17, 20, 27, 29, 19, 22, 24, 27, 30, 37],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
    
  }
  
  
});


