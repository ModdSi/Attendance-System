import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" h-full w-full flex flex-col bg-blue-600  items-center p-20">
      <Link to="/stpage">
        <div className="mb-4 cursor-pointer hover:opacity-50 h-[44px] flex items-center  p-4">
          <h2 className="text-white text-2xl font-light">Students</h2>
        </div>
      </Link>
      <Link to="/attpage">
        <div className="mb-4 cursor-pointer hover:opacity-50 h-[44px] flex items-center  p-4">
          <h2 className="text-white text-2xl font-light">Attendances</h2>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
