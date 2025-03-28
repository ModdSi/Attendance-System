const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentRouter = require("./routes/studentRoutes");
const app = express();
const AttendanceRecord = require("./models/attendace");

require("dotenv").config();
const DBurl = process.env.MONGO_URL;
app.use(express.json());
app.use(cors());
app.use("/api", studentRouter);

mongoose
  .connect(`${DBurl}`)
  .then(() => {
    console.log("connected successfully");
  })
  .catch((error) => {
    console.log("error connecting to the DB", error);
    console.log(DBurl);
  });

app.listen(3000, () => {
  console.log("listening on port 3000");
});

AttendanceRecord.collection
  .dropIndex("date_1")
  .then(() => console.log("Unique index on date removed"))
  .catch((err) => console.log("Index removal error:", err.message));
