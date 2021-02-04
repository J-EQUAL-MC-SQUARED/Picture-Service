/* eslint-disable no-console */
const fs = require('fs').promises;
const path = require('path');

const records = ['itemid, description'];
const faker = require('faker');

for (let i = 1; i <= 10000000; i += 1) {
  const desc = faker.commerce.productName();
  const record = `${i}, ${desc}`;
  records.push(record);
  if (i % 10 === 0) {
    console.log(`Generating data for item id ${i}`);
  }
}
const filePath = path.join(__dirname, 'CSV');
fs.writeFile(`${filePath}/items2.csv`, records.join('\n'))
  .then(() => {
    console.log('Success');
  })
  .catch((err) => {
    console.error(err);
  });
