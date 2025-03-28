const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  date: { type: String, required: true }, // Stores the date of attendance
  students: [
    {
      studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
      name: { type: mongoose.Schema.Types.String, ref: "Student" },

      present: { type: Boolean, default: false }, // Default: absent
    },
  ],
});
const AttendanceRecord = mongoose.model("AttendanceRecord", attendanceSchema);

module.exports = AttendanceRecord;
