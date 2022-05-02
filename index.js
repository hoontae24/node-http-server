const http = require("http");
const lodash = require("lodash");

http
  .createServer((request, response) => {
    const url = lodash.get(request, "url");
    console.log("incoming request", url);
    response.end(`Hello World on ${url}`);
  })
  .listen(8080, () => console.log("Server is listening on port 8080"));
