import React, { useState } from "react";
import Tasklist from "./components/tasklist/Tasklist";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  function add(e) {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  }

  function delTodo(delInd) {
    setTasks((tasks) => tasks.filter((task, ind) => delInd != ind));
  }

  let button = document.getElementById('add')
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      button.click()
    }
  };


  return (
    <>
      <div className="box">
        <div className="smallbox">
          <h1>To Do List</h1>
          <input
            id="taskinp"
            type="text"
            placeholder="Enter a task !"
            onChange={(e) => setTask(e.target.value)}
            value={task}
            onKeyDown={handleKeyDown}
          />
          <button id="add" onClick={(e) => add(e)}>
            +
          </button>
        </div>
        <Tasklist tasks={tasks} delTodo={delTodo} />
      </div>
    </>
  );
}

export default App;
