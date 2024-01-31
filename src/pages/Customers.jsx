import React, { useEffect, useState } from "react";
import UserData from "../Components/UserData";

const API = "https://randomuser.me/api/?inc=name,id,gender,city,picture,email,phone&results=25";

const TableHeader = ({ columns }) => {
  const thStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    border: "1px solid #ddd",
    textAlign: "center",
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column} style={thStyle}>
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const Customers = () => {
  const [users, setUsers] = useState([]);

  const fetchUser = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        setUsers(data.results);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUser(API);
  }, []);

  const tableContainerStyle = {
    border: "1px solid #ddd",

    marginTop: "65px",
    width: "100%",
    overflowX: "auto", 
  };

  const tableStyle = {
    width: "100%",
    border: "1px solid #ddd",
  };


  const columns = ["S NO", "ID", "Name", "Email", "Gender", "Phone"];


  return (
    <div style={tableContainerStyle}>
      <table style={tableStyle}>
        <TableHeader columns={columns} />
        <tbody>
          <UserData users={users}/>
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
