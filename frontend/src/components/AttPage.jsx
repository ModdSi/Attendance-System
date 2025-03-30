import AttendanceTable from "./AttendanceTable";
import table from "../assets/table.png";
import AddClass from "./popup2";
import { useEffect, useState } from "react";
function AttPage() {
  const [className, setClassName] = useState("");
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const getClasses = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/class-records");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();

        if (result) {
          setClasses(result);
        } else {
          console.error("error: ", result);
        }
      } catch (error) {
        console.error("Error adding new day:", error);
      }
    };
    getClasses();
  }, [classes]);

  console.log("this", classes);
  return (
    <div className="w-full h-screen">
      <div className="flex justify-between mb-12 mt-40">
        <h1 className="text-4xl font-light">Attendance Tables</h1>
        {/* <button className="px-4 text-white rounded-2xl bg-blue-600">
                  Add Student
                </button> */}
        <AddClass className={className} setClassName={setClassName} />
      </div>
      <div className="flex flex-wrap gap-8  ">
        {classes.map((c) => (
          <div
            class="card"
            className="w-[350px] cursor-pointer opacity-70 hover:opacity-100 h-[250px] bg-gray-300  rounded-2xl flex flex-col items-center justify-center"
          >
            <img src={table} className="w-4/5 h-[200px] opacity-40" />
            <div className="bg-gray-400 w-full flex p-4 rounded-b-2xl  justify-center">
              {" "}
              <h2 className="text-xl   ">{c.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AttPage;
