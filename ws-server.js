const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws, req) {
  console.log("connection");

  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  console.log("sending response");
  ws.send("something");
});
