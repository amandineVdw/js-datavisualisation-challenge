window.onload = function () {
  //REMOTE CANVAS
  const remoteContainer = document.createElement("div");

  const remoteCanvas = document.createElement("canvas");
  remoteCanvas.id = "remoteChart";
  remoteCanvas.style.width = "100%";
  remoteCanvas.style.maxWidth = "700px";

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

  //OFFENCHE POLICE CANVAS

  const offencePoliceContainer = document.createElement("div");

  const offencePoliceCanvas = document.createElement("canvas");
  offencePoliceCanvas.id = "offencePoliceChart";
  offencePoliceCanvas.style.width = "100%";
  offencePoliceCanvas.style.maxWidth = "700px";

  offencePoliceContainer.appendChild(offencePoliceCanvas);

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

  new Chart(offencePoliceCtx, {
    type: "bar",
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

  // HOMICIDE POLICE CANVAS

  const homicidePoliceContainer = document.createElement("div");

  const homicidePoliceCanvas = document.createElement("canvas");
  homicidePoliceCanvas.id = "homicidePoliceChart";
  homicidePoliceCanvas.style.width = "100%";
  homicidePoliceCanvas.style.maxWidth = "700px";

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
    type: "bar",
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
