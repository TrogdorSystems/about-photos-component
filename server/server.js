require('newrelic');
const http = require('http');
const url = require('url');
const path = require('path');
const db = require('../db/database.js');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

const port = process.env.PORT || 8082;

http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFileAsync(path.join(__dirname, '../client/dist/index.html'), 'utf8')
      .then((data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      })
      .catch(() => {
        res.writeHead(400);
        res.end();
      });
  } else if (req.url.match('.css')) { 
      const css = fs.createReadStream(path.join(__dirname, '../client/dist/styles.css'), 'utf8');
      res.writeHead(200, {'Content-Type': 'text/css'});
      css.pipe(res);
  } else if (req.url.match('.js')) { 
      const bundle = fs.createReadStream(path.join(__dirname, '../client/dist/bundle.js'), 'utf8');
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      bundle.pipe(res);
  } else if (req.url.match('/favicon.ico')) {
      res.writeHead(404);
      res.end();
  } else if (req.url.startsWith('/restaurants')) {
    const id  = Number(req.url.split('/')[2]);
    db.findByRestaurantId(id, (err, data) => {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(data));
    });
  }
 }).listen(port);

console.log(`Server running on port ${port}.`);