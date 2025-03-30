const express = require("express");
const Student = require("../models/student");
const router = express.Router();
const AttendanceRecord = require("../models/attendace");
const ClassRecord = require("../models/classes");

///////////////

router.get("/attendance-records", async (req, res) => {
  try {
    const records = await AttendanceRecord.find(); // Fetch all students from the database
    res.json(records); // Send data as JSON response
  } catch (err) {
    console.error("Error retrieving records:", err);
    res.status(500).json({ error: "Error retrieving records" });
  }
});

router.get("/add-day", async (req, res) => {
  try {
    const attendaces = await AttendanceRecord.find(); // Fetch all students from the database
    res.json(attendaces); // Send data as JSON response
  } catch (err) {
    console.error("Error retrieving attendances:", err);
    res.status(500).json({ error: "Error retrieving attendances" });
  }
});

router.get("/class-records", async (req, res) => {
  try {
    const classes = await ClassRecord.find(); // Fetch all students from the database
    res.json(classes); // Send data as JSON response
  } catch (err) {
    console.error("Error retrieving classes:", err);
    res.status(500).json({ error: "Error retrieving classes" });
  }
});

router.post("/add-class", async (req, res) => {
  try {
    const newClass = new ClassRecord({
      name: req.body.name,
    });
    await newClass.save();
    res.json({ message: "New class added successfully!", newClass });
  } catch (error) {
    console.error("Error adding new class:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/add-day", async (req, res) => {
  try {
    const { date } = req.body;
    const { classId } = req.body;
    // const existingRecord = await AttendanceRecord.findOne({ date });
    // if (existingRecord) {
    //   return res
    //     .status(400)
    //     .json({ message: "Attendance for this date already exists." });
    // }

    if (!date) {
      return res.status(400).json({ error: "Date is required" });
    }
    // Fetch all students only once (avoid duplication)
    const students = await Student.find();

    // Create new attendance record
    const newRecord = new AttendanceRecord({
      date,
      classId,
      students: students.map((student) => ({
        studentId: student._id,
        name: student.name, // Store name once
        attendTime: student.attendTime,
        present: false, // Default: Not marked present
      })),
    });

    await newRecord.save();
    res.json({ message: "New day added successfully!", newRecord });
  } catch (error) {
    console.error("Error adding new day:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
///////////////

router.post("/student", async (req, res) => {
  try {
    const newStudent = new Student({
      name: req.body.name,
      faceUrl: req.body.faceUrl,
    });
    await newStudent.save();
    res.json({ message: "Student data saved successfully!" });
  } catch (err) {
    console.error("Error saving user data:", err);
    res.status(500).json({ error: "Error saving user data" });
  }
});

router.get("/students", async (req, res) => {
  try {
    const students = await Student.find(); // Fetch all students from the database
    res.json(students); // Send data as JSON response
  } catch (err) {
    console.error("Error retrieving students:", err);
    res.status(500).json({ error: "Error retrieving students" });
  }
});

module.exports = router;
