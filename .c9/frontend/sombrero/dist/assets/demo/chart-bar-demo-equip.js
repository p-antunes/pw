// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChartEquip");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
    datasets: [{
      label: "Equipamentos",
      backgroundColor: "rgba(92, 17, 19)",
      borderColor: "rgba(92, 17, 19)",
      data: [10, 18, 23, 27, 32, 35],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 50,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
