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

