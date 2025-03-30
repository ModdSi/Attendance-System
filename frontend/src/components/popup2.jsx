import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function AddClass({ className, setClassName }) {
  // const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setClassName(
      e.target.value // Update based on input name
    );
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setClassName(inputValue); // Save the input value to state on submission
  //   setInputValue(""); // Clear the input field after submission
  //   addClass();
  // };
  console.log(className);

  const addClass = async (e) => {
    try {
      const response = await fetch("http://localhost:3000/api/add-class", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: className }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("class added successfully!");
      } else {
        alert(data.message || "Error adding class");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="cursor-pointer  ">
      <Popup
        trigger={
          <div className="py-2 px-4 text-xl text-white rounded-xl cursor-pointer hover:bg-blue-700 bg-blue-600">
            Add Class
          </div>
        }
        modal
        nested
        contentStyle={{
          width: "400px",
          borderRadius: "20px",
          padding: "40px",
        }}
        overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
      >
        {(close) => (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="">
              <h2 className="text-xl font-bold mb-4">Add a New Class</h2>
              <form className="space-y-3" onSubmit={addClass}>
                <div>
                  <label className="block font-medium">Class Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={className.Name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer hover:bg-blue-600 bg-blue-500 text-white p-2 rounded"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
