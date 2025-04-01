import { useState, useEffect } from "react";
import pfp from "../assets/pic.png";
import PopupGfg from "./popup";
function StPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/students");
        const data = await response.json();
        setStudents(data); // Store data in state
        console.log(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="flex justify-between mb-12 mt-40">
        <h1 className="text-4xl font-light">Students Table</h1>

        <PopupGfg />
      </div>

      <div className="flex flex-wrap gap-4  ">
        {students.map((student) => (
          <div
            key={student._id}
            className="rounded-[50px] flex flex-col justify-center items-center h-[250px]  w-[200px] bg-gray-300 opacity-80"
          >
            <img src={pfp} className=" h-2/4 " />{" "}
            <h2 className="text-xl mt-4">{student.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StPage;
