// Créer le container pour les graphiques
const crimeStatContainer = document.createElement("div");
crimeStatContainer.style.display = "flex";
crimeStatContainer.style.flexWrap = "wrap";
crimeStatContainer.style.gap = "20px";

// Créer le div pour le graphique CanvasJS
const canvasJSContainer = document.createElement("div");
canvasJSContainer.id = "canvasJSContainer";
canvasJSContainer.style.width = "100%";
canvasJSContainer.style.maxWidth = "80rem";
canvasJSContainer.style.height = "40rem";
crimeStatContainer.appendChild(canvasJSContainer);

// Insérer le container dans l'article (en dessous de l'élément avec id 'firstHeading')
const crimeStatElement = document.getElementById("firstHeading");
if (crimeStatElement) {
  crimeStatElement.insertAdjacentElement("afterend", crimeStatContainer);
} else {
  console.error("Element with id 'firstHeading' not found.");
}

// CanvasJS Setup
window.onload = function () {
  var dataPoints = [];
  var chart;

  // Initial data fetch
  $.getJSON(
    "https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json",
    function (data) {
      $.each(data, function (key, value) {
        dataPoints.push({ x: value[0], y: parseInt(value[1]) });
      });
      chart = new CanvasJS.Chart("canvasJSContainer", {
        title: {
          text: "Live Chart - Crime in Europe Union - from January 2014",
        },
        data: [
          {
            type: "line",
            dataPoints: dataPoints,
          },
        ],
      });
      chart.render();
      updateChart();
    }
  );

  // Function to update chart data
  function updateChart() {
    $.getJSON(
      "https://canvasjs.com/services/data/datapoints.php?xstart=" +
        (dataPoints.length + 1) +
        "&ystart=" +
        dataPoints[dataPoints.length - 1].y +
        "&length=1&type=json",
      function (data) {
        $.each(data, function (key, value) {
          dataPoints.push({
            x: parseInt(value[0]),
            y: parseInt(value[1]),
          });
        });
        chart.render();
        setTimeout(function () {
          updateChart();
        }, 1000); // Update every 1 second
      }
    );
  }
};
