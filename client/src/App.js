//import reportWebVitals from './reportWebVitals';
//reportWebVitals();
import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [sname, setStudentName] = useState("");
  const [tech, setTechnology] = useState("");
  const [status, setStatus] = useState("");
  const [rollno, setRollno] = useState("");
  const [branch, setBranch] = useState("");

  // Function to handle form submission
  const submitReview = () => {
    Axios.post("http://localhost:9000/classrooms", {
      name: sname,
      tech: tech,
      sub: status,
      rollno: rollno,
      branch: branch,
    }).then(() => {
      alert("success");
    }).catch((error) => {
      console.error("There was an error submitting the data!", error);
    });
  };

  return (
    <div className="App">
      <h1>CRUD Application Demo</h1>
      <div className="information">
        <label><b>Student Name</b></label>
        <input
          type="text"
          name="sname"
          onChange={(e) => {
            setStudentName(e.target.value);
          }}
          required
        />

        <label><b>Technology</b></label>
        <input
          type="text"
          name="tech"
          onChange={(e) => {
            setTechnology(e.target.value);
          }}
          required
        />

        <label><b>Status</b></label>
        <input
          type="text"
          name="status"
          onChange={(e) => {
            setStatus(e.target.value);
          }}
          required
        />

        <label><b>Rollno</b></label>
        <input
          type="number"
          name="rollno"
          onChange={(e) => {
            setRollno(e.target.value);
          }}
          required
        />

        <label><b>Branch</b></label>
        <input
          type="text"
          name="branch"
          onChange={(e) => {
            setBranch(e.target.value);
          }}
          required
        />

        <button onClick={submitReview}><b>Submit</b></button>
      </div>
    </div>
  );
}

export default App;
