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

  // Création du graphique
  let myChart = new Chart(offencePoliceCtx, config);

  // Fonction pour mettre à jour le graphique
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
