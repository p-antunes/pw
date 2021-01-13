// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChartOper");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["0 a 5 operacionais", "6 a 10 operacionais", "11 a 15 operacionais", "16 a 20 operacionais","21 a 25 operacionais", '26 a 30 operacionais', '31 a 35 operacionais',' 36 a 40 operacionais'],
    
    datasets: [{
      data: [10, 15, 15, 20, 15, 10, 10, 5],
      backgroundColor: ['#E37940', '#b81512', '#e32e12', '#f5c71a','#e80911', '#FF7518', '#FFFF66', '#ffa500'],
    }],
  },
});
