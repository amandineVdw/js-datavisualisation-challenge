// Fonction pour ajouter une balise <link> pour précharger une police
function addPreloadFont(href, type) {
  var link = document.createElement("link");
  link.rel = "preload";
  link.href = href;
  link.as = "font";
  link.type = type;
  link.crossOrigin = "anonymous"; // Ajoute l'attribut crossorigin si nécessaire
  document.head.appendChild(link);
}

// Fonction pour ajouter une balise <link> pour inclure une police Google
function addGoogleFont(href) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

// Utilisation des fonctions pour ajouter les polices
addPreloadFont("/webfontname", "font/format");
addGoogleFont("googlewebfonturl&display=swap");

// CanvasJS Setup - LIVE CHART- H1
window.onload = function () {
  var dataPoints = [];
  var chart;

  // Initial data fetch - LIVE CHART- H1
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

  // Function to update chart data - LIVE CHART- H1
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
        }, 1000); // Update every 1 second - LIVE CHART- H1
      }
    );
  }
};
