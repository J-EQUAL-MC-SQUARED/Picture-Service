/* eslint-disable no-console */
const fs = require('fs').promises;
const path = require('path');

const records = ['picid, fkitemid, largePics, thumbnails'];

let itemid = 1;
for (let i = 1; i <= 90000000; i += 1) {
  const random = Math.floor(Math.random() * (1000 - 1) + 1);
  const largePics = `https://picture-service.s3.us-east-2.amazonaws.com/images498/image${random}.jpg`;
  const thumbnails = `https://picture-service.s3.us-east-2.amazonaws.com/images70/image${random}.jpg`;
  const record = `${i}, ${itemid}, ${largePics}, ${thumbnails}`;
  records.push(record);
  if (i % 9 === 0) {
    itemid += 1;
    console.log(`Generating data for Primary key ${itemid}`);
  }
}
const filePath = path.join(__dirname, 'CSV');
fs.writeFile(`${filePath}/pictures.csv`, records.join('\n'))
  .then(() => {
    console.log('YASSSS SUCCESSSSS!!!!! WOOHOOOOO!!!!');
  })
  .catch((err) => {
    console.error(err);
    console.log('Upgrade your pc man!');
  });
