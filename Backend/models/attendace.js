const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  date: { type: String, required: true }, // Stores the date of attendance
  classId: { type: String, required: true },
  students: [
    {
      studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
      name: { type: mongoose.Schema.Types.String, ref: "Student" },
      attendTime: { type: String, default: "-" },
      present: { type: Boolean, default: false }, // Default: absent
    },
  ],
});
const AttendanceRecord = mongoose.model("AttendanceRecord", attendanceSchema);

module.exports = AttendanceRecord;
