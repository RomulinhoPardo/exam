const mongoose = require("mongoose");

const singersSchema = mongoose.Schema(
  {
    name: {
      Name: String,
      required: true,
    },
    music: {
      type: String,
      required: true,
    },
    Contry: {
      country: String,
      required: true,
    },
  },
  {
    collection: "singers",
  }
);

module.exports = mongoose.model("singers", singersSchema);
