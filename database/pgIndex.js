/* eslint-disable no-console */
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'picture',
});

pool.connect()
  .then(() => console.log('successfully connect to the PSQL!!'))
  .catch((err) => console.log('Could not connect: ', err));

module.exports = pool;
