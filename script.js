//OFFENCE POLICE CANVAS
const offencePoliceContainer = document.createElement("div");

// Créer le canvas/chart pour le graphique
const offencePoliceCanvas = document.createElement("canvas");
offencePoliceCanvas.id = "offencePoliceChart";
offencePoliceCanvas.style.width = "100%";
offencePoliceCanvas.style.maxWidth = "80rem";

// Ajouter le canvas/chart dans la div/container
offencePoliceContainer.appendChild(offencePoliceCanvas);

// Créer le menu déroulant pour sélectionner l'ensemble de données
const dataSetSelect = document.createElement("select");
dataSetSelect.id = "dataSetSelect";

// Ajouter des options pour les années de 2022 à 2012
for (let year = 2022; year >= 2012; year--) {
  const option = document.createElement("option");
  option.value = year;
  option.text = `Data for the year ${year}`;
  dataSetSelect.appendChild(option);
}

// Ajouter le menu déroulant dans la div/container
offencePoliceContainer.appendChild(dataSetSelect);

// Insérer la div/chart au bon endroit dans l'article (en dessous de bodyContent=id)
const offencePoliceElement = document.getElementById("bodyContent");
if (offencePoliceElement) {
  const titleElement = document.getElementById("Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police");
  titleElement.insertAdjacentElement("afterend", offencePoliceContainer);
} else {
  console.error("Element with id 'bodyContent' not found.");
}

// Obtenir le contexte du canvas
const offencePoliceCtx = offencePoliceCanvas.getContext("2d");


// Même label chaque année$
const labels =['Belgigium', 'Bulgaria', 'Czech Republic', 'Denmark', 'Germany', 'Estonia', 'Ireland', 'Greece', 'Spain', 'France', 'Croatia', 'Italy', 'Cyprus', 'Latvia', 'Lithuania', 'Luxembourg', 'Hungary', 'Malta', 'The Nedtherlands', 'Austria','Poland','Portugal','Romania', 'Slovenia','Slovakia','Finland','Swenden','Iceland','Liechtenstein','Norway','Switzerland','Montenegro','Macedonia','Serbia','Turkey'];

// Données initiales du graphique

const dataSets = {
  2002: [1012.8, 146.9, 372.3, 491.5, 6507.4, 53.3, 106.4, 441.1, 2183.5, 4113.9, 77.9, 2231.6, 4.8, 49.3, 72.6, 26.0, 420.8, 17.0, 1401.9, 591.6, 1404.2, 391.6, 312.2, 77.2, 107.4, 435.0, 1234.8, 19.9, 1.0, 319.5, 356.8, 8.9],
  2003: [1007.8, 143.9, 357.7, 486.2, 6572.1, 53.6, 103.5, 441.8, 2144.2, 3974.7, 80.4, 2456.9, 7.3, 51.8, 79.1, 26.2, 413.3, 17.7, 1369.3, 643.3, 1466.6, 417.4, 276.8, 76.6, 111.9, 443.5, 1255.4, 17.5, 1.1, 303.8, 379.3, 8.6],
  2004: [1013.7, 142.1, 351.6, 474.4, 6633.2, 53.0, 99.2, 405.6, 2141.3, 3825.4, 85.4, 2417.7, 7.6, 62.2, 84.1, 26.9, 418.8, 18.4, 1319.5, 643.6, 1461.2, 416.4, 231.6, 86.6, 131.2, 445.5, 1248.7, 16.6, 1.0, 287.8, 389.4, 8.2],
  2005: [999.4, 137.8, 344.1, 432.7, 6391.7, 52.9, 102.2, 456.0, 2230.9, 3775.8, 79.9, 2579.1, 7.2, 51.4, 82.1, 25.3, 436.5, 18.6, 1348.3, 605.3, 1380.0, 392.7, 208.2, 84.4, 123.6, 432.3, 1241.8, 12.0, 1.1, 275.7, 352.7, 9.6],
  2006: [1022.8, 136.4, 336.4, 425.1, 6304.2, 51.8, 103.2, 463.8, 2267.1, 3725.6, 81.0, 2771.5, 7.9, 62.3, 75.5, 25.9, 425.9, 16.5, 1311.8, 589.5, 1287.9, 399.6, 232.7, 90.4, 115.2, 416.1, 1225.0, 13.5, 1.2, 277.0, 335.2, 9.6],
  2007: [1034.4, 134.7, 357.4, 445.3, 6284.7, 50.4, None, 423.4, 2309.9, 3589.3, 75.9, 2933.1, 7.6, 55.6, 68.0, 28.3, 426.9, 15.0, 1303.8, 594.2, 1153.0, 398.6, 281.5, 88.2, 110.8, 435.8, 1306.3, 13.0, 1.1, 271.7, 326.2, 9.3],
  2008: [1043.6, 126.7, 343.8, 477.0, 6114.1, 51.0, None, 417.4, 2396.9, 3558.3, 74.6, 2709.9, 7.3, 57.5, 72.0, 28.2, 408.4, 13.8, 1277.8, 572.7, 1082.1, 430.5, 289.3, 81.9, 104.8, 440.7, 1377.9, 14.6, 1.2, 264.2, 323.2, 8.3],
  2009: [1067.3, 138.1, 332.8, 491.8, 6054.3, 48.4, None, 386.9, 2339.2, 3521.3, 73.5, 2629.8, 7.1, 56.7, 76.3, 32.4, 394.0, 12.0, 1254.5, 591.6, 1129.6, 426.0, 299.9, 87.5, 104.9, 441.4, 1405.6, 16.0, 1.2, 277.1, 676.3, 8.1],
  2010: [1072.0, 147.0, 313.4, 471.1, 5933.3, 48.3, None, 334.0, 2297.5, None, 73.3, 2621.0, 8.4, 51.1, 70.6, 30.5, 447.2, 13.3, 1194.0, 535.7, 1151.2, 422.6, 292.7, 89.5, 95.3, 431.6, 1370.4, 14.9, 1.0, 270.7, 656.9, 7.0],
  2011: [1111.0, 128.6, 317.2, 466.8, 5990.7, 42.6, None, 194.0, 2285.5, None, 75.6, 2763.0, 8.5, 51.6, 72.1, 35.7, 451.4, 14.2, 1194.1, 540.0, 1151.1, 424.2, 280.3, 88.8, 89.4, 415.1, 1297.9, 15.8, 1.0, 271.4, 634.8, 6.7],
  2012: [1094.0, 105.2, 278.8, 481.8, 6023.5, 34.6, None, 98.5, 2224.5, None, 82.2, 2477.7, 7.6, 43.8, 67.1, 36.1, 380.0, 12.3, 1162.0, 523.3, 1105.0, 385.6, 271.1, 82.1, 84.4, 408.0, 1195.2, 12.3, 1.1, 263.4, 633.5, 6.3]
}


// Initialiser le graphique avec les données de 2022
const chartData = {
  labels: labels,
  datasets: [{
    label: 'Number of Crimes in 2022',
    data: dataSets[2022],
    borderWidth: 1
  }]
};

const chartOptions = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const offencePoliceChart = new Chart(offencePoliceCtx, {
  type: 'bar',
  data: chartData,
  options: chartOptions
});

// Fonction pour mettre à jour les données du graphique
function updateChart(year) {
  offencePoliceChart.data.datasets[0].data = dataSets[year];
  offencePoliceChart.data.datasets[0].label = `Number of Crimes in ${year}`;
  offencePoliceChart.update();
}

// Ajouter un écouteur d'événement pour détecter les changements dans le menu déroulant
document.getElementById('dataSetSelect').addEventListener('change', function(event) {
  const selectedYear = event.target.value;
  updateChart(selectedYear);
});









