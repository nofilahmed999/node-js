
const resSender = (res, message) => {
  return res.end(message);
};

const http = require("http");

const server = http.createServer((req, res) => {
  const endPoint = req.url;

  if (endPoint == "/") {
    resSender(res, "Welcome to shop");
  } else if (endPoint == "/phone") {
    resSender(res, "Which phone do you want?");
  } else if (endPoint == "/shoes") {
    resSender(res, "How many pairs do you want?");
    } else if (endPoint == "/jacket") {
    resSender(res, "Jacket leather or fabric");
    } else if (endPoint == "/perfume") {
    resSender(res, "Perfume sweet or spicy ");
}else {
    res.writeHead(404)
    resSender(res, "This page doesnt exists");
    
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("server is listening on port 5000");
});