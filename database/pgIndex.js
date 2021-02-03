const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://hezki96@localhost:5432/mydb');

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.close();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

connection();
