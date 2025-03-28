import { useState } from "react";
import "../App.css";
import AttendanceTable from "./AttendanceTable";
import Add from "./Add";
import ImageUpload from "./ImageUpload";
import Navbar from "./Navbar";
import StPage from "./StPage";
import AttPage from "./AttPage";
import { Routes, Route } from "react-router-dom";
import Table from "./Tabel";

function App() {
  return (
    <div className=" flex w-full h-screen justify-center items-center  ">
      <div class="navbar" className="w-1/6  fixed h-screen z-20 top-0 left-0 ">
        <Navbar />
      </div>
      <div className="w-1/6  h-screen top-0 left-0 "></div>
      <div class="container" className=" w-5/6 px-16 ">
        <Routes>
          <Route path="/stpage" element={<StPage />}></Route>
        </Routes>

        <Routes>
          <Route path="/attpage" element={<AttPage />}></Route>
        </Routes>
        {/* <AttPage /> */}
        {/* <StPage /> */}
        {/* <AttendanceTable /> */}
      </div>
    </div>
  );
}

export default App;
