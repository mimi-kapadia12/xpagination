import "./App.css";
import { useEffect, useState } from "react";

function Employees({ employees }) {
  const [currentEmployeeData, setCurrentEmployeeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    if (employees && employees.length > 0) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setCurrentEmployeeData(employees.slice(startIndex, endIndex));
    }
  }, [currentPage, employees, itemsPerPage]);

  const HandlePreviousBtnClick = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const HandleNextBtnClick = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="m-2">
      <div>
        <table className="table table-responsive">
          <thead className="table-success">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployeeData.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-controls">
        <button
          className="btn btn-success btn-sm m-1"
          onClick={HandlePreviousBtnClick}
          disabled={currentPage <= 1}
        >
          Previous
        </button>
        <button className="btn btn-success btn-sm m-1"> {currentPage} </button>
        <button
          className="btn btn-success btn-sm m-1"
          onClick={HandleNextBtnClick}
          disabled={currentPage * itemsPerPage >= employees.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Employees;
