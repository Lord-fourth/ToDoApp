import React from "react";

function CompletedTasks(props) {
  const completedTasks = props.listOfTasks.filter((task) => {
    return task.isItCompleted === true;
  });
  console.log("completed tasks:", completedTasks);
  return (
    <React.Fragment>
      <div>
        {completedTasks.map((txt) => (
          <div key={txt.id}>
            <li
              style={{
                textDecorationLine: "line-through",
                textDecorationStyle: "solid",
              }}
            >
              {txt.value}
            </li>
            <button
              className="btn btn-danger btn-sm m-2"
              onClick={() => props.handleDelete(txt.id)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default CompletedTasks;
