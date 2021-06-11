import React from "react";
import { MDBIcon } from "mdbreact";

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
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={props.handleDeleteAll}
        >
          <i class="bi bi-trash"></i>
          Delete All
        </button>

        <button class="btn">
          <i class="fa fa-trash"></i>
          <MDBIcon far icon="trash-alt" />
          <MDBIcon icon="check-square" list /> Trash
        </button>
        {/* <Icon name="edit" tooltip="Edit" theme="light" size="medium" /> */}
      </div>
    </React.Fragment>
  );
}

export default CompletedTasks;
