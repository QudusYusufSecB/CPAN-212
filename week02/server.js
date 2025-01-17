const http = require("http");

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hello from Home");
  } else if (req.url === "/details") {
    res.end("hello from details");
  } else if (req.url === "/login") {
    res.end("hello from login");s
  } else {
    res.end("Page not found");
  }
});

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
