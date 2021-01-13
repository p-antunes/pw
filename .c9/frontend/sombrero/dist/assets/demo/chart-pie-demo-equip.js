// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChartEquip");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Abafador Extensível", "Ancinho", "Foição", "Indutor de Espuma", "Machado Florestal", "Mangueira", "Material Separador", "Mcleod", "Multifunções", "Pá Florestal", "Pulaski"],
    datasets: [{
      data: [10,5,9,7,8,6,8,11,13,14,10],
      backgroundColor: ['#E37940','#b81512', '#ff0800', '#e32e12', '#dfff00','#e80911', '#fd5800','#f5c71a', '#fb4f14', '#ffff66','#ff8c00'],
    }],
  },
});
