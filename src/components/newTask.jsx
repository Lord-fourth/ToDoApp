import React, { useState, useEffect } from "react";
import Checkbox from "./checkbox";
import "../App.css";
function NewTask(props) {
  function Greeting(inp) {
    if (inp.value.isempty) return <li>{inp.value}</li>;
    let obj = props.listOfTasks.find((obj) => obj.id === inp.id);
    if (obj.isItCompleted) {
      return (
        <ul
          style={{
            width: "150",
            textDecorationLine: "line-through",
            textDecorationStyle: "solid",
            textAlign: "center",
          }}
        >
          {inp.value}
        </ul>
      );
    }
    return (
      <ul
        style={{
          width: "150",
          textAlign: "center",
        }}
      >
        {inp.value}
      </ul>
    );
  }
  return (
    <React.Fragment>
      <input
        // className="input-form"
        // style={{ textAlign: "center" }}
        type="text"
        name="defaultValue"
        value={props.newTask}
        onChange={props.handleChange}
        onKeyPress={props.handleKeyPress}
      />

      <button onClick={props.addTask} className="btn btn-primary btn-sm m-2">
        Add
      </button>
      <div>
        {props.listOfTasks.map((txt) => (
          <div key={txt.id} className="myForm">
            <Greeting id={txt.id} value={txt.value} />
            <Checkbox
              style={{ float: "right" }}
              isItCompleted={txt.isItCompleted}
              id={txt.id}
              markAsCompleted={props.handleMarkAsCompleted}
              toggleCheckbox={props.toggleCheckbox}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default NewTask;
