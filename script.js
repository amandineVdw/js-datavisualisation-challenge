window.onload = function () {
  //REMOTE CANVAS
  const remoteContainer = document.createElement("div");

  const remoteCanvas = document.createElement("canvas");
  remoteCanvas.id = "remoteChart";
  remoteCanvas.style.width = "100%";
  remoteCanvas.style.maxWidth = "80rem";

  remoteContainer.appendChild(remoteCanvas);

  const remoteElement = document.getElementById("bodyContent");
  if (remoteElement) {
    const titleElement = document.getElementById("firstHeading");
    titleElement.insertAdjacentElement("afterend", remoteContainer);
  } else {
    console.error("Element with id 'bodyContent' not found.");
  }

  const remoteCtx = remoteCanvas.getContext("2d");

  new Chart(remoteCtx, {
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

  const offencePoliceCtx = offencePoliceCanvas.getContext("2d");
  const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
  const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

  new Chart(offencePoliceCtx, {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      scales: {
        yAxes: [{ ticks: { min: 6, max: 16 } }],
      },
    },
  });

  // HOMICIDE POLICE CANVAS

  const homicidePoliceContainer = document.createElement("div");

  const homicidePoliceCanvas = document.createElement("canvas");
  homicidePoliceCanvas.id = "homicidePoliceChart";
  homicidePoliceCanvas.style.width = "100%";
  homicidePoliceCanvas.style.maxWidth = "80rem";

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
