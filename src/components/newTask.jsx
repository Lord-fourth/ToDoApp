import React from "react";

function NewTask(props) {
  // const handleKeyPress = (e) => {
  //   if (e.charCode === 13) {
  //     this.addTask();
  //   }
  // };
  // const handleChange = (event) => {
  //   this.setState({ newTask: event.target.value });
  // };
  // addTask = () => {
  //   const listOfTasks = [
  //     ...this.state.listOfTasks,
  //     { id: this.state.listOfTasks.length + 1, value: this.state.newTask },
  //   ];

  //   const newTask = this.state.defaultValue;
  //   this.setState({ listOfTasks });
  //   this.setState({ newTask });
  // };

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
          <li key={txt.id}>{txt.value}</li>
        ))}
      </div>
    </React.Fragment>
  );
}

export default NewTask;
