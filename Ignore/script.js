//BACKUP 02-078-2027
window.onload = function () {
  //REMOTE CANVAS
  const remoteContainer = document.createElement("div");

  const remoteCanvas = document.createElement("canvas");
  remoteCanvas.id = "remoteChart";
  remoteCanvas.style.width = "100%";
  remoteCanvas.style.maxWidth = "80rem";
  remoteCanvas.role = "img";

  remoteContainer.appendChild(remoteCanvas);

  const remoteElement = document.getElementById("bodyContent");
  if (remoteElement) {
    const titleElement = document.getElementById("firstHeading");
    titleElement.insertAdjacentElement("afterend", remoteContainer);
  } else {
    console.error("Element with id 'bodyContent' not found.");
  }

  const remoteCtx = remoteCanvas.getContext("2d");

  const remoteChart = new Chart(remoteCtx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 28, 3, 5, 72, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  //OFFENCE POLICE CANVAS

  //Créer la div/container pour mettre le cavans/chart
  const offencePoliceContainer = document.createElement("div");

  //Créer le canvas/chart pour le graphique
  const offencePoliceCanvas = document.createElement("canvas");
  offencePoliceCanvas.id = "offencePoliceChart";
  offencePoliceCanvas.style.width = "100%";
  offencePoliceCanvas.style.maxWidth = "80rem";
  offencePoliceCanvas.role = "img";

  //Ajouter le canvas/chart dans la div/container
  offencePoliceContainer.appendChild(offencePoliceCanvas);

  //Inserer la div/chart au bon endroit dans l'article (en dessous de bodyContent=id)
  const offencePoliceElement = document.getElementById("bodyContent");
if (offencePoliceElement) {
  const titleElement = document.getElementById(
    "Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police"
  );
  titleElement.insertAdjacentElement("afterend", offencePoliceContainer);
} else {
  console.error("Element with id 'bodyContent' not found.");
}


const table = document.getElementById("table2");
  if (!table) {
    console.error('Table with id "table2" not found.');
  }
  const rows = table
    .getElemementsByTagName("tbody")[0]
    .getElemementsByTagName("tr");

  const countries = [];
  const data = [];
  const labels = Array.from(
    table.getElementsByTagName("thead")[0].getElementsByTagName("th")
  )
    .slice(2)
    .map((th) => th.innerText);

  for (let row of rows) {
    const cells = row.getElementsByTagName("td");
    const contry = cells[0].innerText;
    countries.push(country);

    const rowData = [];
    for (let i = 1; i < cells.length; i++) {
      rowData.push(parseFloat(cells[i].innerText.replace(",", ".")));
    }
    data.push(rowData);
  }

  const offencePoliceCtx = offencePoliceCanvas.getContext("2d");
  offencePoliceCtx = {
     labels: labels,
     datasets: countries.map((country, index) => ({
       label: country,
       data: data[index],
       fill: false,
       borderColor: "rgba(75, 192, 192, 1)",
       tension: 0.1,
     })),
   };
   const offencePoliceChart = new Chart(ctx, {
     type: "bar",
     data: chartData,
     options: {
       responsive: true,
       scales: {
         y: {
           beginAtZero: true,
         },
       },
     },
   });


  // HOMICIDE POLICE CANVAS

  const homicidePoliceContainer = document.createElement("div");

  const homicidePoliceCanvas = document.createElement("canvas");
  homicidePoliceCanvas.id = "homicidePoliceChart";
  homicidePoliceCanvas.style.width = "100%";
  homicidePoliceCanvas.style.maxWidth = "80rem";
  homicidePoliceCanvas.role = "img";

  homicidePoliceContainer.appendChild(homicidePoliceCanvas);

  const homicidePoliceElement = document.getElementById("bodyContent");
  if (homicidePoliceElement) {
    const titleElement = document.getElementById("Homicides");
    titleElement.insertAdjacentElement("afterend", homicidePoliceContainer);
  } else {
    console.error("Element with id 'bodyContent' not found.");
  }

  const homicidePoliceCtx = homicidePoliceCanvas.getContext("2d");

  new Chart(homicidePoliceCtx, {
    type: "line",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};


new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 5, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});