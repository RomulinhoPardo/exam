const mongoose = require("mongoose");

const singersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    awards: {
      type: String,
      required: true,
    },
  },

  {
    collection: "singers",
  }
);

module.exports = Singers = mongoose.model("singers", singersSchema);
