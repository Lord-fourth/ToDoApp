import React, { useState, useEffect } from "react";
import NewTask from "./components/newTask";
import CompletedTasks from "./components/completedTasks";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "bootstrap/dist/css/bootstrap.css";
import Checkbox from "./components/checkbox";

function App() {
  const [listOfTasks, setListOfTasks] = useState([]);
  const [newTask, setNewTask] = useState("I wanna ");
  const [defaultValue, setDefaultValue] = useState("I wanna ");
  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      addNewTask();
    }
  };
  const handleChange = (event) => {
    setNewTask(event.target.value);
    // this.setState({ newTask: event.target.value });
  };
  const handleToggleCheckbox = (index) => {
    console.log("inside handletoggle checkbox");
    console.log("id in handletogglecheckbox:", index);
    const sample = listOfTasks;
    console.log("list:", listOfTasks, "sample:", sample);
    sample[index - 1] = { ...newTask };
    console.log("id:", index, "before bool:", sample[index - 1].isItCompleted);

    sample[index - 1].isItCompleted = !sample[index - 1].isItCompleted;
    console.log("present bool:", sample[index - 1].isItCompleted);
    setListOfTasks(sample);
    console.log("new list:", listOfTasks, "present sample", sample);
  };
  useEffect(() => {
    console.log("inside use effect in app");
    // setValue(props.isItCompleted);
    setListOfTasks(listOfTasks);
  }, [listOfTasks]);
  const handleMarkAsCompleted = (newTask) => {
    console.log("inside handlemarkascompleted");
    const sample = listOfTasks;
    // console.log("list:", listOfTasks, "sample:", sample);
    let index = sample.indexOf(newTask);
    sample[index] = { ...newTask };
    sample[index].isItCompleted = true;
    setListOfTasks(sample);
    console.log(
      "index:",
      index,
      "list:",
      listOfTasks,
      "status:",
      listOfTasks[index].isItCompleted
    );
  };
  function addNewTask() {
    console.log("inside addnewtask");
    // console.log(listOfTasks);
    console.log("newTask:", newTask);
    setListOfTasks([
      ...listOfTasks,
      {
        id: listOfTasks.length + 1,
        value: newTask,
        isItCompleted: false,
      },
    ]);
    setNewTask(defaultValue);
  }

  return (
    <React.Fragment>
      <h1>To Do App</h1>
      <Tabs>
        <TabList>
          <Tab>All</Tab>
          <Tab>Completed</Tab>
        </TabList>

        <TabPanel>
          <NewTask
            listOfTasks={listOfTasks}
            newTask={newTask}
            defaultValue={defaultValue}
            addTask={addNewTask}
            handleKeyPress={handleKeyPress}
            handleChange={handleChange}
            markAsCompleted={handleMarkAsCompleted}
            toggleCheckbox={handleToggleCheckbox}
          />
        </TabPanel>
        <TabPanel>
          <CompletedTasks
            listOfTasks={listOfTasks}
            newTask={newTask}
            defaultValue={defaultValue}
            addTask={addNewTask}
            handleKeyPress={handleKeyPress}
            handleChange={handleChange}
          />
        </TabPanel>
      </Tabs>
    </React.Fragment>
  );
}

export default App;
