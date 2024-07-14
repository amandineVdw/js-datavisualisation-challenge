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

// TABLE1
// Créer le container pour le graphique - TABLE1
const offencePoliceContainer = document.createElement("div");

// Créer le canvas pour le graphique - TABLE1
const offencePoliceCanvas = document.createElement("canvas");
offencePoliceCanvas.id = "offencePoliceChart";
offencePoliceCanvas.style.width = "100%";
offencePoliceCanvas.style.maxWidth = "80rem";

// Ajouter le canvas dans le container - TABLE1
offencePoliceContainer.appendChild(offencePoliceCanvas);

// Créer le menu déroulant pour sélectionner l'ensemble de données
const dataSetSelect = document.createElement("select");
dataSetSelect.id = "dataSetSelect";

// Ajouter le menu déroulant dans la div/container
offencePoliceContainer.appendChild(dataSetSelect);

// Insérer la div/chart au bon endroit dans l'article (en dessous de bodyContent=id)
const offencePoliceElement = document.getElementById("bodyContent");
if (offencePoliceElement) {
  const titleElement = document.getElementById(
    "Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police"
  );
  titleElement.insertAdjacentElement("afterend", offencePoliceContainer);
} else {
  console.error("Element with id 'bodyContent' not found.");
}

// Obtenir le contexte du canvas
const offencePoliceCtx = offencePoliceCanvas.getContext("2d");

document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner le tableau
  let table1 = document.getElementById("table1");

  // Sélectionner les années à partir de la première ligne du tableau (les en-têtes de colonne, sauf le premier)
  let dataYears = Array.from(
    table1.querySelectorAll("tbody > tr:first-child > th:not(:first-child)")
  )
    .slice(1)
    .map((th) => th.innerText.trim());

  console.log(dataYears);

  // Remplir le menu déroulant avec les années
  dataYears.forEach((year) => {
    const option = document.createElement("option");
    option.value = year;
    option.text = year;
    dataSetSelect.appendChild(option);
  });

  // Sélectionner toutes les lignes du tableau sauf la première (en-têtes)
  let mixedData = [];
  Array.from(table1.querySelectorAll("tbody > tr:not(:first-child)")).forEach(
    (row) => {
      let countryName = row.cells[1].textContent.trim(); // Nom du pays
      Array.from(row.cells)
        .slice(2)
        .forEach((cell, index) => {
          let year = dataYears[index];
          mixedData.push({
            year: year,
            country: countryName,
            data: parseFloat(cell.textContent.replace(",", ".")),
          });
        });
    }
  );

  // Console log pour vérifier les données
  console.log(mixedData);

  // Fonction pour créer les labels et datasets pour l'année sélectionnée
  function createLabelsAndDatasets(selectedYear) {
    // Obtenir la liste des pays uniques
    const countries = Array.from(
      new Set(mixedData.map((item) => item.country))
    );

    // Filtrer les données pour l'année sélectionnée
    const filteredData = mixedData.filter((item) => item.year === selectedYear);

    // Créer les datasets pour le graphique
    const datasets = [
      {
        label: `Crime Index (${selectedYear})`,
        data: countries.map((country) => {
          const dataForCountry = filteredData.find(
            (item) => item.country === country
          );
          return dataForCountry ? dataForCountry.data : null;
        }),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ];

    return {
      labels: countries,
      datasets: datasets,
    };
  }

  // Initialiser le graphique avec la première année sélectionnée
  const initialYear = dataSetSelect.value || dataYears[0];
  const initialData = createLabelsAndDatasets(initialYear);

  // Configuration du graphique
  const config = {
    type: "bar",
    data: initialData,
    options: {
      responsive: true,
      scales: {
        x: {
          stacked: true,
          title: {
            display: true,
            text: "Country",
          },
        },
        y: {
          stacked: false,
          type: "linear",
          display: true,
          position: "left",
          title: {
            display: true,
            text: "Crime Index",
          },
          maintainAspectRatio: false,
        },
      },
    },
  };

  // Création du graphique - TABLE1
  let myChart = new Chart(offencePoliceCtx, config);

  // Fonction pour mettre à jour le graphique -TABLE1
  function updateChart(selectedYear) {
    const newData = createLabelsAndDatasets(selectedYear);
    myChart.data.labels = newData.labels;
    myChart.data.datasets = newData.datasets;
    myChart.update();
  }

  // Ajouter un écouteur d'événement pour le menu déroulant
  dataSetSelect.addEventListener("change", function (event) {
    const selectedYear = event.target.value;
    updateChart(selectedYear);
  });

  // Initialiser le menu déroulant avec la première année
  dataSetSelect.value = initialYear;
  updateChart(initialYear);

  const myObj = JSON.stringify(mixedData);
  console.log(myObj);
  localStorage.setItem("testJson", myObj);
});

//TABLE2
// Créer le container pour le graphique - TABLE2
const homicidePoliceContainer = document.createElement("div");

// Créer le canvas pour le graphique  - TABLE2
const homicidePoliceCanvas = document.createElement("canvas");
homicidePoliceCanvas.id = "homicidePoliceChart";
homicidePoliceCanvas.style.width = "100%";
homicidePoliceCanvas.style.maxWidth = "80rem";

// Ajouter le canvas dans le container - TABLE2
homicidePoliceContainer.appendChild(homicidePoliceCanvas);

// Insérer la div/chart au bon endroit dans l'article (en dessous de Homicides=id) -TABLE2
const homicidePoliceElement = document.getElementById("bodyContent");
if (homicidePoliceElement) {
  const titleElement = document.getElementById("Homicides");
  titleElement.insertAdjacentElement("afterend", homicidePoliceContainer);
} else {
  console.error("Element with id 'bodyContent' not found.");
}

// Obtenir le contexte du canvas -TABLE2
const homicidePoliceCtx = homicidePoliceCanvas.getContext("2d");

document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner le tableau  -TABLE2
  let table2 = document.getElementById("table2");

  // Sélectionner les années à partir de la première ligne du tableau (les en-têtes de colonne, sauf le premier) -TABLE2
  let dataYears2 = Array.from(
    table2.querySelectorAll("thead > tr:first-child > th")
  )
    .slice(2)
    .map((th) => th.innerText.trim());

  // Console log pour vérifier les années sélectionnées -TABLE2
  console.log(dataYears2);

  // Sélectionner toutes les lignes du tableau sauf la première (en-têtes) -TABLE2
  let mixedData2 = [];
  Array.from(table2.querySelectorAll("tbody > tr")).forEach((row) => {
    let countryName2 = row.cells[1].textContent.trim(); // Nom du pays

    // Remplacer "England and\n                      Wales(UK)" par "England-Wales(UK)"   -TABLE2
    if (countryName2 === "England and\n                      Wales(UK)") {
      countryName2 = "England-Wales(UK)";
    }

    Array.from(row.cells)
      .slice(2)
      .forEach((cell, index) => {
        let year2 = dataYears2[index];
        mixedData2.push({
          year: year2,
          country: countryName2,
          data: parseFloat(cell.textContent.replace(",", ".")),
        });
      });
  });

  // Console log pour vérifier les données -TABLE2
  console.log(mixedData2);

  // Fonction pour créer les labels et datasets pour toutes les années -TABLE2
  function createLabelsAndDatasets() {
    // Obtenir la liste des pays uniques -TABLE2
    const countries = Array.from(
      new Set(mixedData2.map((item) => item.country))
    );

    // Créer les datasets pour chaque année -TABLE2
    const datasets = dataYears2.map((year, index) => {
      return {
        label: `Prison Population (${year})`,
        data: countries.map((country) => {
          const dataForCountry = mixedData2.find(
            (item) => item.year === year && item.country === country
          );
          return dataForCountry ? dataForCountry.data : null;
        }),
        backgroundColor:
          index === 0 ? "rgba(75, 192, 192, 0.2)" : "rgba(255, 99, 132, 0.2)", // Couleur différente pour chaque année   -TABLE2
        borderColor:
          index === 0 ? "rgba(75, 192, 192, 1)" : "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      };
    });

    return {
      labels: countries,
      datasets: datasets,
    };
  }

  // Initialiser le graphique avec toutes les années sélectionnées - TABLE2
  const initialData = createLabelsAndDatasets();

  // Configuration du graphique -TABLE2
  const config = {
    type: "bar",
    data: initialData,
    options: {
      responsive: true,
      maintainAspectRatio: false, // Permet de ne pas maintenir le ratio d'aspect pour plus de flexibilité  -TABLE2
      scales: {
        x: {
          stacked: true,
          title: {
            display: true,
            text: "Country",
          },
        },
        y: {
          stacked: false,
          type: "linear",
          display: true,
          position: "left",
          title: {
            display: true,
            text: "Prison Population (per 100,000 inhabitants)",
          },
        },
      },
    },
  };

  // Création du graphique  -TABLE2
  let myChart2 = new Chart(homicidePoliceCtx, config);
});

// LIVE CHART - H1
// Créer le container pour les graphiques - LIVE CHART- H1
const crimeStatContainer = document.createElement("div");
crimeStatContainer.style.display = "flex";
crimeStatContainer.style.flexWrap = "wrap";
crimeStatContainer.style.gap = "20px";

// Créer le div pour le graphique CanvasJS - LIVE CHART- H1
const canvasJSContainer = document.createElement("div");
canvasJSContainer.id = "canvasJSContainer";
canvasJSContainer.style.width = "100%";
canvasJSContainer.style.maxWidth = "80rem";
canvasJSContainer.style.height = "40rem";
crimeStatContainer.appendChild(canvasJSContainer);

// Insérer le container dans l'article (en dessous de l'élément avec id 'firstHeading')- LIVE CHART- H1
const crimeStatElement = document.getElementById("firstHeading");
if (crimeStatElement) {
  crimeStatElement.insertAdjacentElement("afterend", crimeStatContainer);
} else {
  console.error("Element with id 'firstHeading' not found.");
}

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
