const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  // date: { type: String, required: true }, // Stores the date of attendance
  name: { type: String, required: true },
});
const ClassRecord = mongoose.model("classRecord", classSchema);

module.exports = ClassRecord;
