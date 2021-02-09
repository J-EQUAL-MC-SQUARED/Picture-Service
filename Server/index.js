/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
require('newrelic');
require('dotenv').config();
const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const pool = require('../database/pgIndex.js');

const app = express();
const PORT = process.env.PORT || 3004;

app.get('/api/picture-service/:id', async (req, res) => {
  const id = parseInt(req.path.split('/')[3], 10) + 1;
  const queryStr = `SELECT itemid, description, largePics, thumbnails FROM items INNER JOIN pictures ON itemid = fkitemid WHERE itemid = ${id}`;
  try {
    const { rows } = await pool.query(queryStr);
    const result = [];
    const largePicsArr = [];
    const thumbnailsArr = [];
    for (const row of rows) {
      const { thumbnails } = row;
      const largePics = row.largepics;
      largePicsArr.push(largePics);
      thumbnailsArr.push(thumbnails);
    }
    const obj = {
      description: rows[0].description,
      product_id: rows[0].itemid,
      largePics: largePicsArr.reverse(),
      thumbnails: thumbnailsArr.reverse(),
    };
    result.push(obj);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(500);
  }
});

app.use('/', expressStaticGzip('./Client/public', {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
}));


app.listen(PORT, () => {
  console.log(`server listening for picture service on port ${PORT}`);
});
