import React from "react";
import "./Form.css";

function Form() {
  return (
    <>
      <div id="wrap">
        <p className="title">Worker Details</p>
        <form className="App">
          <label for="id">  Worker Id:</label>
          <input type="number" />
          <label for="wname">  Worker Name:</label>
          <input type="text" />
          <label for="phone">Phone No</label>
          <input type="number" />
          <label for="address">Address:</label>
          <input type="text" />
          <label for="available">Available:</label>
          <input type="text" />
          <button id="box">GET</button>
          <button id="box1">POST</button>
          <button id="box2">PUT</button>
          <button id="box3">DELETE</button>
        </form>
        </div>
    </>
  );
}

export default Form;