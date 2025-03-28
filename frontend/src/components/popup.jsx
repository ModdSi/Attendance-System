import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Add from "./Add";

export default function PopupGfg() {
  return (
    <div className="cursor-pointer  ">
      <Popup
        trigger={
          <div className="py-2 px-4 text-xl text-white rounded-xl bg-blue-600">
            Add Student
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
            <Add />
          </div>
        )}
      </Popup>
    </div>
  );
}
