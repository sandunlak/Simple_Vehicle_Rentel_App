import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Showdoctors() {
  const [appoinments, setAppoinments] = useState([]);

  useEffect(() => {
    function getAppoinments() {
      axios.get("http://localhost:8000/appoinment/show")
        .then((res) => {
          setAppoinments(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getAppoinments();
  }, []);

  return (
    <div className="container">
      <h1>Your Reservation</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialization</th>
            <th>States</th>
          </tr>
        </thead>
        <tbody>
          {appoinments.map((appoinment, index) => (
            <tr key={index}>
              <td>{appoinment.name}</td>
              <td>{appoinment.special}</td>
              <td>{appoinment.states}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
