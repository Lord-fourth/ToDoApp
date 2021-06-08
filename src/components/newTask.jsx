import React, { useState, useEffect } from "react";
import Checkbox from "./checkbox";

function NewTask(props) {
  console.log("list in newtask:", props.listOfTasks);
  const [value, setValue] = useState(props.listOfTasks);

  if (props.listOfTasks.size > 0)
    console.log(
      "isitcompleted in newtask:",
      props.listOfTasks[0].isItCompleted
    );
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
            <li>{txt.value}</li>
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
