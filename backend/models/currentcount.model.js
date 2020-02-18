const mongoose = require("mongoose")
const Schema = mongoose.Schema
const currentCountSchema = new Schema(
  {
    counter: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Currentcount = mongoose.model("Currentcount", currentCountSchema)

module.exports = Currentcount
