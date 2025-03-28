import { useState } from "react";
import ImageUpload from "./ImageUpload";

function Add() {
  const [student, setStudent] = useState({
    name: "",
    faceUrl: "",
  });

  const handleSubmit = async (e) => {
    console.log(student);
    try {
      const response = await fetch("http://localhost:3000/api/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Student added successfully!");
      } else {
        alert(data.message || "Error adding student");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setStudent((prev) => ({
      ...prev,
      [e.target.name]: e.target.value, // Update based on input name
    }));
  };

  return (
    <div>
      <div className="">
        <h2 className="text-xl font-bold mb-4">Add New Student</h2>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <ImageUpload
              required
              faceUrl={student.faceUrl}
              setStudent={setStudent}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
