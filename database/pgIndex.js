/* eslint-disable no-console */
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB,
  port: 5432,
  max: 400,
});

pool.connect()
  .then(() => console.log('successfully connect to the PSQL!!'))
  .catch((err) => console.log('Could not connect: ', err));

module.exports = pool;
