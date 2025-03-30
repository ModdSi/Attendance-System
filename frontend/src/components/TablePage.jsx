import Table from "./Tabel";

function TablePage() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex fixed justify-between mb-12 mt-40">
        <h1 className="text-4xl font-light">Students Table</h1>
      </div>
      <Table />
    </div>
  );
}

export default TablePage;
