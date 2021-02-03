const faker = require('faker');
const ObjectsToCsv = require('objects-to-csv');
// const mongo = require('./index.js');

const itemsArr = [];

const arrayBuilder = () => {
  let i = 0;
  while (i < 20) {
    itemsArr.push({
      product_id: i,
      description: faker.commerce.productName(),
      largePics: [`http://placeimg.com/498/498/arch?random=${Math.round(Math.random() * 1000)}`, `http://placeimg.com/498/498/arch?random=${Math.round(Math.random() * 1000)}`, `http://placeimg.com/498/498/arch?random=${Math.round(Math.random() * 1000)}`, `http://placeimg.com/498/498/arch?random=${Math.round(Math.random() * 1000)}`, `http://placeimg.com/498/498/arch?random=${Math.round(Math.random() * 1000)}`, `http://placeimg.com/498/498/arch?random=${Math.round(Math.random() * 1000)}`, `http://placeimg.com/498/498/arch?random=${Math.round(Math.random() * 1000)}`, `http://placeimg.com/498/498/arch?random=${Math.round(Math.random() * 1000)}`, `http://placeimg.com/498/498/arch?random=${Math.round(Math.random() * 1000)}`],
      thumbnails: [`http://placeimg.com/70/70/arch?random=${Math.round(Math.random() * 1000)}`, `http://placeimg.com/70/70/arch?random=${Math.round(Math.random() * 1000)}`, `http://placeimg.com/70/70/arch?random=${Math.round(Math.random() * 1000)}`, `http://placeimg.com/70/70/arch?random=${Math.round(Math.random() * 1000)}`, `http://placeimg.com/70/70/arch?random=${Math.round(Math.random() * 1000)}`, `http://placeimg.com/70/70/arch?random=${Math.round(Math.random() * 1000)}`, `http://placeimg.com/70/70/arch?random=${Math.round(Math.random() * 1000)}`, `http://placeimg.com/70/70/arch?random=${Math.round(Math.random() * 1000)}`, `http://placeimg.com/70/70/arch?random=${Math.round(Math.random() * 1000)}`],
    });
    i += 1;
  }
};

arrayBuilder();

// const insertItemPictures = () => {
//   mongo.Item.create(itemsArr)
//     .then(() => mongo.db.close());
// };

// insertItemPictures();
(async () => {
  const csv = new ObjectsToCsv(itemsArr);
  // Save to file:
  await csv.toDisk('./test.csv');
  // Return the CSV file as string:
  console.log(await csv.toString());
})();
