/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'CSV');
const ws = fs.createWriteStream(`${filePath}/pictures2.csv`);
ws.write('picid, fkitemid, largePics, thumbnails\n', 'utf-8');
let itemid = 5000001;
for (let i = 45000001; i <= 90000000; i += 1) {
  const random = Math.floor(Math.random() * (1000 - 1) + 1);
  const largePics = `https://picture-service.s3.us-east-2.amazonaws.com/images498/image${random}.jpg`;
  const thumbnails = `https://picture-service.s3.us-east-2.amazonaws.com/images70/image${random}.jpg`;
  const record = `${i}, ${itemid}, ${largePics}, ${thumbnails}`;
  ws.write(`${record}\n`, 'utf-8');
  if (i % 9 === 0) {
    itemid += 1;
  }
  if (i % 450000 === 0) {
    console.log(`process: ${i / 450000}%`);
  }
}
ws.end();
ws.on('close', () => console.log('bye'));
