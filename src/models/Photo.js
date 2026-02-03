const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  title: String,
  caption: String,
  imageUrl: String,

  locationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location"
  },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Photo", photoSchema);
