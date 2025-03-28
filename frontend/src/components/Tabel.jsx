import React, { useEffect, useState } from "react";

export default function Table() {
  const [attendanceStudents, setAttendanceStudents] = useState([]);

  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [dataR, setDataR] = useState([]);
  // Fetch attendance records
  //   useEffect(() => {
  //     const fetchAttendance = async () => {
  //       try {
  //         const response = await fetch(
  //           "http://localhost:3000/api/attendance-records"
  //         );
  //         const data = await response.json();
  //         setAttendanceRecords(data);
  //       } catch (error) {
  //         console.error("Error fetching attendance:", error);
  //       }
  //     };

  //     fetchAttendance();
  //   }, []);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/students");
        const data = await response.json();
        setAttendanceStudents(data); // Store data in state
        // console.log(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  console.log(attendanceStudents);

  // Function to add a new day
  const addNewDay = async () => {
    try {
      const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format
      const response = await fetch("http://localhost:3000/api/add-day", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date: today }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Response from API:", result.newRecord); // Debugging

      if (result.newRecord) {
        setAttendanceRecords((prevRecords) => [
          ...prevRecords,
          result.newRecord,
        ]);
      } else {
        console.error("Unexpected API response format:", result.newRecord);
      }
    } catch (error) {
      console.error("Error adding new day:", error);
    }
  };

  useEffect(() => {
    const getAttend = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/attendance-records"
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        console.log("Response from API:", result[0].date); // Debugging

        if (result) {
          setAttendanceRecords(result);
        } else {
          console.error("Unexpected API response format:", result);
        }
      } catch (error) {
        console.error("Error adding new day:", error);
      }
    };
    getAttend();
  }, []);

  console.log("jasm" + attendanceRecords);
  //   console.log("jasm" + dataR);
  const maxRows = Math.max(
    ...attendanceRecords.map((r) => r.students.length),
    1
  );

  return (
    <div className="flex   items-center">
      <div className="flex   items-center flex-row absolute p-4">
        {attendanceRecords.map((record) => (
          <table className="border-2  border-gray-600  rounded-xl overflow-hidden text-xl h-full  bg-gray-100 drop-shadow-lg mx-4 w-[500px] table-fixed">
            <thead className="border-2">
              {/* {attendanceStudents.map(())} */}
              <tr>
                <th className="border-2 border-gray-600">Name</th>
                <th className="border-2 border-gray-600  px-2">
                  {" "}
                  {record.date}
                  {/* {record.length > 0 ? record.date : "No records"} */}
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: maxRows }).map((_, rowIndex) => {
                const student = record.students[rowIndex] || {}; // Handle missing rows
                return (
                  <tr key={rowIndex} className="h-12 ">
                    {" "}
                    {/* Fixed height for all rows */}
                    <td className="border-2 border-gray-600 px-4 py-2 ">
                      {student.name || ""}
                    </td>
                    <td className="border-2 border-gray-600 px-4 py-2 ">
                      {student.hasOwnProperty("present")
                        ? student.present
                          ? "Present ✅"
                          : "Absent ❌"
                        : ""}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ))}
        <button
          onClick={addNewDay}
          className=" w-70 mx-4 rounded-2xl h-[550px] transition-all flex flex-col items-center justify-center text-2xl border-dashed border-2 hover:opacity-50 cursor-pointer opacity-30 bg-gray-300"
        >
          <span className=" text-5xl flex justify-center p-12 mb-12 items-center border-2 w-[70px] h-[70px] border-dashed rounded-2xl">
            +
          </span>
          New Table
        </button>
      </div>
    </div>
  );
}
