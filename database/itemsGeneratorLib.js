/* eslint-disable no-console */
const faker = require('faker');
const ObjectsToCsv = require('objects-to-csv');

const csvWriter = () => {
  const storage = [];
  const descriptionBuilder = () => {
    let i = 0;
    while (i < 100000) {
      storage.push({
        itemid: index,
        description: faker.commerce.productName(),
      });
      i += 1;
    }
  };
  descriptionBuilder();
  (async () => {
    const csv = new ObjectsToCsv(storage);
    // Save to file:
    await csv.toDisk('./csv/items.csv');
    // Return the CSV file as string:
    console.log(await csv.toString());
  })();
};

let percent = 1;
let index = 0;
while (percent < 10) {
  csvWriter();
  console.log(`${percent} percent complete! Almost there :D`);
  percent += 1;
}
