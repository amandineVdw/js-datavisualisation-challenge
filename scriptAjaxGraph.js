// Créer le container pour le graphique
const crimeStatContainer = document.createElement("div");

// Créer le canvas pour le graphique Chart.js
const crimeStatCanvas = document.createElement("canvas");
crimeStatCanvas.id = "crimeStatChart";
crimeStatCanvas.style.width = "100%";
crimeStatCanvas.style.maxWidth = "80rem";

// Créer le div pour le graphique CanvasJS
const canvasJSContainer = document.createElement("div");
canvasJSContainer.id = "canvasJSContainer";
canvasJSContainer.style.width = "100%";
canvasJSContainer.style.maxWidth = "80rem";

// Ajouter les éléments dans le container
crimeStatContainer.appendChild(crimeStatCanvas);
crimeStatContainer.appendChild(canvasJSContainer);

// Insérer la div/chart au bon endroit dans l'article (en dessous de Homicides=id)
const crimeStatElement = document.getElementById("content");
if (crimeStatElement) {
  const titleElement = document.getElementById("firstHeading");
  titleElement.insertAdjacentElement("afterend", crimeStatContainer);
} else {
  console.error("Element with id 'content' not found.");
}



window.onload = function() {
    // Sélectionner le contexte du canvas
    const ctx = document.getElementById('crimeStatChart').getContext('2d');

    // Initialiser les données et la configuration du graphique
    const initialData = {
        labels: [], // Étiquettes de temps
        datasets: [{
            label: 'Crime Data',
            data: [],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1,
            fill: false // S'assurer que la zone sous la ligne n'est pas remplie
        }]
    };

    const chartOptions = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'second'
                }
            },
            y: {
                beginAtZero: true
            }
        }
    };

    const crimeStatChart = new Chart(ctx, {
        type: 'line',
        data: initialData,
        options: chartOptions
    });

    // Fonction pour récupérer les nouvelles données et mettre à jour le graphique
    function fetchDataAndUpdateChart() {
        $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json", function(data) {
            const newLabels = [];
            const newData = [];

            data.forEach(point => {
                newLabels.push(new Date(point[0] * 1000)); // Convertir l'horodatage en objet Date
                newData.push(point[1]);
            });

            crimeStatChart.data.labels = newLabels;
            crimeStatChart.data.datasets[0].data = newData;
            crimeStatChart.update();
        });
    }

    // Récupération initiale
    fetchDataAndUpdateChart();

    // Définir l'intervalle pour récupérer les nouvelles données toutes les secondes
    setInterval(fetchDataAndUpdateChart, 1000);
};