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

new Chart(document.getElementById("line-chart"), {
  type: "line",
  data: {
    labels: [0, 5, 10, 15, 20, 25, 30],
    datasets: [
      {
        data: [0, 17, 20, 33, 10, 48, 10, 18],
        label: "Tickets",
        borderColor: "#f39c1b",
        fill: true,
        backgroundColor: "rgba(255, 233, 218, 0.6)"
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
      }]
    }
  }
});
