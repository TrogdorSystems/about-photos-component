const exec = require('child_process').exec;

const command = 'mongoimport --db restaurant --collection abouts --file abouts.json --numInsertionWorkers 20';
exec(command);
