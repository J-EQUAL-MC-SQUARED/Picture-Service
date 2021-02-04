/* eslint-disable no-console */
const { Pool } = require('pg');

const pool = new Pool({
  user: 'hezki96',
  database: 'picture',
});

pool.connect()
  .then(() => console.log('successfully connect to the PSQL!!'))
  .catch((err) => console.log('Could not connect: ', err));

module.exports = pool;
