const mongoose = require("mongoose");

const objectSchema = new mongoose.Schema({
  header: String,
  base_unit: String,
  quote_unit: String,
  low: String,
  high: String,
  last: String,
  type: String,
  open: Number,
  volume: String,
  sell: String,
  buy: String,
  at: Number,
  name: String,
});

const dataSchema = mongoose.Schema({
  data: {
    type: [objectSchema],
  },
});

module.exports = mongoose.model("Data", dataSchema);
