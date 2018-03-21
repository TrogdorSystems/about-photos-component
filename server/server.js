require('newrelic');
const app = require('./app.js');

const port = process.env.PORT || 8082;

const server = app.listen(port, () => {});

module.exports = server;
