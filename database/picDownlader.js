/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
const fs = require('fs');
const fetch = require('node-fetch');

const width = 70;
const height = 70;
const keywords = ['arch'];
const numberOfImages = 1000;
const fileprefix = 'image';
const directory = './images70';

async function download(dir, prefix, numberOfImg, wdth, hght, keywrds = []) {
  const joined = keywrds.join(',');
  for (let i = 1; i <= numberOfImg; i += 1) {
    const response = await fetch(`https://loremflickr.com/${wdth}/${hght}/${joined}`);
    const buffer = await response.buffer();
    fs.writeFile(`${dir}/${prefix}${i}.jpg`, buffer, () => console.log(`Downloaded ${i} out of ${numberOfImg}...`));
  }
}
download(directory, fileprefix, numberOfImages, width, height, keywords);
