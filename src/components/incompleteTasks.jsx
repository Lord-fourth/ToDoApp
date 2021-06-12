import React from "react";
import "../App.css";

function IncompletedTasks(props) {
  const incompletedTasks = props.listOfTasks.filter((task) => {
    return task.isItCompleted === false;
  });
  console.log("completed tasks:", incompletedTasks);
  return (
    <React.Fragment>
      <input
        className="input-form"
        style={{ textAlign: "center" }}
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
        {incompletedTasks.map((txt) => (
          <div key={txt.id} className="myForm">
            <ul>{txt.value}</ul>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default IncompletedTasks;
