const http = new require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello");
    res.end();
  }

  if (req.url === "/api/numbers") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.on("connection", (socket) => {
  console.log("Connection from " + socket.localPort);
});

server.listen(3000);
console.log("Listening...");
