module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/restaurants',
    mitgrations: {
      directory: __dirname + '/db/mitgrations',
    },
    seeds: {
      directory: __dirname + '/seeds',
    },
  },
};