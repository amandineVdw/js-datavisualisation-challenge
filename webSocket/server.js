const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 5500 });

wss.on("connection", function connection(ws) {
  console.log("Nouvelle connexion WebSocket établie.");

  ws.on("message", function incoming(message) {
    console.log("Message reçu du client : %s", message);

    // Écho du message reçu
    ws.send(`Echo du serveur : ${message}`);
  });

  ws.on("close", function () {
    console.log("Connexion WebSocket fermée.");
  });
});
