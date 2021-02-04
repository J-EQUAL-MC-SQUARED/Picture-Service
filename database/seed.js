/* eslint-disable no-console */
const faker = require('faker');
const mongo = require('./index.js');

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

const insertItemPictures = () => {
  mongo.Item.create(itemsArr)
    .then(() => mongo.db.close());
};

insertItemPictures();
