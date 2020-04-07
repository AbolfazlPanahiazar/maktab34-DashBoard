$(window).scroll(function() {
  $("#fix")
    .stop()
    .animate(
      {
        marginTop: $(window).scrollTop() + "px",
        marginLeft: $(window).scrollLeft() + "px"
      },
      "fast"
    );
});

var ctx = document.getElementById('line-chart').getContext("2d");
var c = document.getElementById("line-chart");
var ctx = c.getContext("2d");
var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
my_gradient.addColorStop(0, "rgba(243, 156, 27, 0.5)");
my_gradient.addColorStop(1, "rgba(243, 156, 27, 0)");
ctx.fillStyle = my_gradient;
ctx.fillRect(20, 20, 150, 100);

var myChart = new Chart(document.getElementById("line-chart"), {
  type: "line",
  data: {
    labels: [0, 5, 10, 15, 20, 25, 30],
    datasets: [
      {
        data: [17, 20, 33, 10, 48, 10, 18],
        label: "Tickets",
        borderColor: "#f39c1b",
        fill: true,
        backgroundColor: my_gradient
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          min:0,
          max: 50,
          stepSize: 10
        }
      }]
    },
    elements: {
      line: {
        tension: 0,
        strokeWidth: 100
      }
    }
  }
});

