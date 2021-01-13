// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Incêndios Florestais", "Incêndios Urbanos", "Queimadas", "Transporte de doentes não urgentes","Enchimento de Reservatórios"],
    
    datasets: [{
      data: [20, 15, 30, 20, 15],
      backgroundColor: ['#E37940', '#b81512', '#e32e12', '#f5c71a','#e80911'],
    }],
  },
});
