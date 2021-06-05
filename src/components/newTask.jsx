import React, { Component } from "react";
class NewTask extends Component {
  state = {
    listOfTasks: [],
    newTask: "I wanna ",
    defaultValue: "I wanna ",
  };
  handleKeyPress = (e) => {
    if (e.charCode === 13) {
      this.addTask();
    }
  };
  handleChange = (event) => {
    this.setState({ newTask: event.target.value });
  };
  addTask = () => {
    const listOfTasks = [
      ...this.state.listOfTasks,
      { id: this.state.listOfTasks.length + 1, value: this.state.newTask },
    ];

    const newTask = this.state.defaultValue;
    this.setState({ listOfTasks });
    this.setState({ newTask });
  };
  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          name="defaultValue"
          value={this.state.newTask}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
        <button onClick={this.addTask} className="btn btn-primary btn-sm m-2">
          Add
        </button>
        <div>
          {this.state.listOfTasks.map((txt) => (
            <li key={txt.id}>{txt.value}</li>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default NewTask;
