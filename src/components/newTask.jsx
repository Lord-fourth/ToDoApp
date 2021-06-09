import React, { useState, useEffect } from "react";
import Checkbox from "./checkbox";

function NewTask(props) {
  console.log("list in newtask:", props.listOfTasks);

  function Greeting(inp) {
    if (inp.value.isempty) return <li>{inp.value}</li>;
    let obj = props.listOfTasks.find((obj) => obj.id == inp.id);
    if (obj.isItCompleted) {
      return (
        <li
          style={{
            textDecorationLine: "line-through",
            textDecorationStyle: "solid",
          }}
        >
          {inp.value}
        </li>
      );
    }
    return <li>{inp.value}</li>;
  }
  return (
    <React.Fragment>
      <input
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
          <div key={txt.id}>
            {/* <li>{txt.value}</li> */}
            <Greeting id={txt.id} value={txt.value} />
            <Checkbox
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
