const http = require('http'); //import module
const url = require('url');  //import url module
const fs = require('fs');     //read a file
const { log } = require('console');  

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  console.log(parsedUrl);
  console.log(pathname);

  if (pathname === '/') {
    fs.readFile('login.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//2XX - Page success
//3XX - redirection
//4XX - page not found
//5XX -- server error