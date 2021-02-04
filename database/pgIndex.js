/* eslint-disable no-console */
// const { Sequelize } = require('sequelize');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'hezki96',
  database: 'picture',
});

pool.connect()
  .then(() => console.log('successfully connect to the PSQL!!'))
  .catch((err) => console.log('Could not connect: ', err));

module.exports = pool;

// const sequelize = new Sequelize('postgres://hezki96@localhost:5432/mydb');

// const connection = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//     await sequelize.close();
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// };

// connection();
