import React, { useState } from "react";
import NewTask from "./components/newTask";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "bootstrap/dist/css/bootstrap.css";

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
  function addNewTask() {
    console.log("inside addnewtask");
    console.log(listOfTasks);
    console.log("newTask:", newTask);
    setListOfTasks([
      ...listOfTasks,
      {
        id: listOfTasks.length + 1,
        value: newTask,
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
          />
        </TabPanel>
        <TabPanel>
          <NewTask
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
