import React from "react";

function CompletedTasks(props) {
  const completedTasks = props.listOfTasks.filter((task) => {
    return task.isItCompleted === true;
  });
  console.log("completed tasks:", completedTasks);
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
        {completedTasks.map((txt) => (
          <div key={txt.id}>
            <li>{txt.value}</li>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default CompletedTasks;
