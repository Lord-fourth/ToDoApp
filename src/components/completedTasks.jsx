import React from "react";
import { FaTrash } from "react-icons/fa";
import "../App.css";

function CompletedTasks(props) {
  const completedTasks = props.listOfTasks.filter((task) => {
    return task.isItCompleted === true;
  });
  console.log("completed tasks:", completedTasks);
  return (
    <React.Fragment>
      <div>
        {completedTasks.map((txt) => (
          <div key={txt.id} className="myForm">
            <ul
              style={{
                textDecorationLine: "line-through",
                textDecorationStyle: "solid",
              }}
            >
              {txt.value}
            </ul>
            <FaTrash
              className="m-2"
              onClick={() => props.handleDelete(txt.id)}
            />
          </div>
        ))}
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={props.handleDeleteAll}
        >
          Delete All
        </button>
      </div>
    </React.Fragment>
  );
}

export default CompletedTasks;
