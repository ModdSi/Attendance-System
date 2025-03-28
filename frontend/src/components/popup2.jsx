import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function AddClass({ className, setClassName }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(
      e.target.value // Update based on input name
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setClassName(inputValue); // Save the input value to state on submission
    setInputValue(""); // Clear the input field after submission
  };
  console.log(inputValue);
  return (
    <div className="cursor-pointer  ">
      <Popup
        trigger={
          <div className="py-2 px-4 text-xl text-white rounded-xl bg-blue-600">
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
              <form className="space-y-3" onSubmit={handleSubmit}>
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
                  className="w-full bg-blue-500 text-white p-2 rounded"
                >
                  Add Student
                </button>
              </form>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
