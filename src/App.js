import "./App.css";
import { useEffect, useState } from "react";
import Employees from "./Employees";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [employees, setEmployees] = useState({});

  const fetchData = async () => {
    const apiUrl =
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
    const res = await fetch(apiUrl);
    if (res && res.ok) {
      const data = await res.json();
      setEmployees(data);
    } else {
      console.log("failed to fetch data", res);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App container">
      <h2>Employee Data Table</h2>
      <Employees employees={employees}></Employees>
    </div>
  );
}

export default App;
