const mongoose = require('mongoose');

const db = mongoose.createConnection('mongodb://localhost/understock', { server: { reconnectTries: Number.MAX_VALUE } });

const itemSchema = new mongoose.Schema({
  product_id: Number,
  description: String,
  largePics: Array,
  thumbnails: Array,
});
const Item = db.model('Item', itemSchema);

module.exports = { Item, db };
