import React, { useState, useEffect } from "react";
import NewTask from "./components/newTask";
import CompletedTasks from "./components/completedTasks";
import IncompletedTasks from "./components/incompleteTasks";
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
  };
  const handleToggleCheckbox = (index) => {
    console.log("inside handletoggle checkbox");
    let obj = listOfTasks.find((obj) => obj.id == index);
    const sample = [...listOfTasks];
    let indexToChange = sample.indexOf(obj);
    sample[indexToChange].isItCompleted = !sample[indexToChange].isItCompleted;
    // sample[index - 1].isItCompleted = !sample[index - 1].isItCompleted;
    setListOfTasks(sample);
  };
  const handleDelete = (id) => {
    console.log("inside handleDelete");
    const sample = [...listOfTasks].filter((c) => c.id != id);
    // sample = sample.filter((c) => c.id != id);
    setListOfTasks(sample);
  };
  const handleDeleteAll = () => {
    console.log("inside handleDeleteAll ");
    const sample = [...listOfTasks].filter((c) => c.isItCompleted === false);
    setListOfTasks(sample);
  };
  function addNewTask() {
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
      <Tabs
        tabItemContainerStyle={{ width: "44px" }}

        // style={{ background: "blue" }}
        // contentContainerStyle={{ background: "#FFF" }}
      >
        <TabList>
          <Tab>All</Tab>
          <Tab>Completed</Tab>
          <Tab>Active</Tab>
        </TabList>

        <TabPanel>
          <NewTask
            listOfTasks={listOfTasks}
            newTask={newTask}
            defaultValue={defaultValue}
            addTask={addNewTask}
            handleKeyPress={handleKeyPress}
            handleChange={handleChange}
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
            handleDelete={handleDelete}
            handleDeleteAll={handleDeleteAll}
          />
        </TabPanel>
        <TabPanel>
          <IncompletedTasks
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
