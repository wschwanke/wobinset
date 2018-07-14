const knex = require('knex')({
  client: 'mysql2',
  debug: process.env.MYSQL_DEBUG,
  connection: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
  },
  pool: {
    min: 0,
    max: 10,
  },
});

module.exports = knex;
