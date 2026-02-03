const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  title: String,
  slug: String,
  description: String,
  coverImage: String,

  spots: [String],
  bestFood: [String],

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Location", locationSchema);
