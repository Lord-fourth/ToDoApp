import React, { Component } from "react";
class NewTask extends Component {
  state = {
    listOfTasks: [{ id: 1, value: "task1" }],
    newTask: "newTask",
  };
  handleChange = (event) => {
    this.setState({ newTask: event.target.value });
  };
  addTask = () => {
    console.log("inside addTask");
    const listOfTasks = [
      ...this.state.listOfTasks,
      { id: this.state.listOfTasks.length + 1, value: this.state.newTask },
    ];
    console.log(listOfTasks);
    this.setState({ listOfTasks });
  };
  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          name="newTask"
          value={this.state.newTask}
          onChange={this.handleChange}
        />
        <button onClick={this.addTask} className="btn btn-primary btn-sm m-2">
          Add
        </button>
        <div>Hi {this.state.newTask}</div>
        <div>
          {this.state.listOfTasks.map((txt) => (
            <li key={txt.id}>{txt.value}</li>
          ))}
        </div>

        {/* {this.state.listOfTasks.map((task) => task)} */}
      </React.Fragment>
    );
  }
}

export default NewTask;
