// Créer le container pour le graphique
const homicidePoliceContainer = document.createElement("div");

// Créer le canvas pour le graphique
const homicidePoliceCanvas = document.createElement("canvas");
homicidePoliceCanvas.id = "homicidePoliceChart";
homicidePoliceCanvas.style.width = "100%";
homicidePoliceCanvas.style.maxWidth = "80rem";

// Ajouter le canvas dans le container
homicidePoliceContainer.appendChild(homicidePoliceCanvas);

// Insérer la div/chart au bon endroit dans l'article (en dessous de Homicides=id)
const homicidePoliceElement = document.getElementById("bodyContent");
if (homicidePoliceElement) {
  const titleElement = document.getElementById("Homicides");
  titleElement.insertAdjacentElement("afterend", homicidePoliceContainer);
} else {
  console.error("Element with id 'bodyContent' not found.");
}

// Obtenir le contexte du canvas
const homicidePoliceCtx = homicidePoliceCanvas.getContext("2d");

document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner le tableau
  let table2 = document.getElementById("table2");

  // Sélectionner les années à partir de la première ligne du tableau (les en-têtes de colonne, sauf le premier)
  let dataYears2 = Array.from(
    table2.querySelectorAll("thead > tr:first-child > th")
  )
    .slice(2)
    .map((th) => th.innerText.trim());

  // Console log pour vérifier les années sélectionnées
  console.log(dataYears2);

  // Sélectionner toutes les lignes du tableau sauf la première (en-têtes)
  let mixedData2 = [];
  Array.from(table2.querySelectorAll("tbody > tr")).forEach((row) => {
    let countryName2 = row.cells[1].textContent.trim(); // Nom du pays

    // Remplacer "England and\n                      Wales(UK)" par "England-Wales(UK)"
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

  // Console log pour vérifier les données
  console.log(mixedData2);

  // Fonction pour créer les labels et datasets pour toutes les années
  function createLabelsAndDatasets() {
    // Obtenir la liste des pays uniques
    const countries = Array.from(
      new Set(mixedData2.map((item) => item.country))
    );

    // Créer les datasets pour chaque année
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
          index === 0 ? "rgba(75, 192, 192, 0.2)" : "rgba(255, 99, 132, 0.2)", // Couleur différente pour chaque année
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

  // Initialiser le graphique avec toutes les années sélectionnées
  const initialData = createLabelsAndDatasets();

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
            text: "Prison Population (per 100,000 inhabitants)",
          },
        },
      },
    },
  };

  // Création du graphique
  let myChart2 = new Chart(homicidePoliceCtx, config);
});
