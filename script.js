// Créer le container pour le graphique
const offencePoliceContainer = document.createElement("div");

// Créer le canvas pour le graphique
const offencePoliceCanvas = document.createElement("canvas");
offencePoliceCanvas.id = "offencePoliceChart";
offencePoliceCanvas.style.width = "100%";
offencePoliceCanvas.style.maxWidth = "80rem";

// Ajouter le canvas dans le container
offencePoliceContainer.appendChild(offencePoliceCanvas);

// Créer le menu déroulant pour sélectionner l'ensemble de données
const dataSetSelect = document.createElement("select");
dataSetSelect.id = "dataSetSelect";

// Ajouter des options pour les années de 2012 à 2002
for (let year = 2012; year >= 2002; year--) {
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
  let dataYear = Array.from(
    table1.querySelectorAll("tbody > tr:first-child > th:not(:first-child)")
  )
    .slice(1)
    .map((th) => th.innerText.trim());

  console.log(dataYear);

  // Sélectionner toutes les lignes du tableau sauf la première (en-têtes)
  let mixedData = [];
  Array.from(table1.querySelectorAll("tbody > tr:not(:first-child)")).forEach(
    (row) => {
      let countryName = row.cells[1].textContent.trim(); // Nom du pays
      Array.from(row.cells)
        .slice(2)
        .forEach((cell, index) => {
          let year = dataYear[index];
          mixedData.push({
            year: year,
            country: countryName,
            data: parseFloat(cell.textContent.replace(",", ".")),
          });
        });
    }
  );

  console.log(mixedData);

  // Fonction pour créer les labels et datasets pour une année donnée
  function createLabelsAndDatasets(year) {
    const filteredData = mixedData.filter((item) => item.year === year);
    const labels = filteredData.map((item) => item.country);
    const crimeIndexes = filteredData.map((item) => item.data);

    return {
      labels: labels,
      datasets: [
        {
          label: `Crime Index (${year})`,
          data: crimeIndexes,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          yAxisID: "y",
        },
      ],
    };
  }

  // Initialiser le graphique avec l'année la plus récente (par exemple, 2012)
  const initialYear = "2012";
  const initialData = createLabelsAndDatasets(initialYear);

  // Configuration du graphique
  const config = {
    type: "bar",
    data: {
      labels: initialData.labels,
      datasets: initialData.datasets,
    },
    options: {
      responsive: true,
      scales: {
        y: {
          type: "linear",
          display: true,
          position: "left",
          title: {
            display: true,
            text: "Crime Index",
          },
        },
      },
    },
  };

  // Création du graphique
  const myChart = new Chart(offencePoliceCtx, config);

  // Fonction pour mettre à jour le graphique
  function updateChart(year) {
    const newData = createLabelsAndDatasets(year);
    myChart.data.labels = newData.labels;
    myChart.data.datasets = newData.datasets;
    myChart.update();
  }

  // Ajouter un écouteur d'événements pour le menu déroulant
  document
    .getElementById("dataSetSelect")
    .addEventListener("change", function (event) {
      const selectedYear = event.target.value;
      updateChart(selectedYear);
    });
});
