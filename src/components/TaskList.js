import { useState } from "react";
import React from "react";
import classes from "./TaskList.module.css";
import axios from "axios";

function TaskList(props) {
  const [task, setTask] = useState("");
  function taskChangeHandler(event) {
    setTask(event.target.value);
  }
  const [startDate, setStartDate] = useState("");
  function startDateChangeHandler(event) {
    setStartDate(event.target.value);
  }
  const [endDate, setEndDate] = useState("");
  function endDateChangeHandler(event) {
    setEndDate(event.target.value);
  }

  const [tasks, setTasks] = useState([]);

  function getData() {
    const gttsk = process.env.REACT_APP_GTTSK;
    axios.get(gttsk + "taskList-" + props.tableTitle).then((response) => {
      setTasks(response.data);
    });
  }

  function submitHandler(event) {
    const atsk = process.env.REACT_APP_ATSK;
    axios
      .post(atsk, {
        task: task,
        startDate: startDate,
        endDate: endDate,
        name: "taskList-" + props.tableTitle,
      })
      .then((response) => {
        console.log(response);
      });
    event.preventDefault();

    getData();
  }

  return (
    <div className={classes.wrapper}>
      <p>
        <label>Task</label>
        <input type="text" id="task" onChange={taskChangeHandler} />
      </p>
      <p>
        <label>Start Date</label>
        <input type="text" id="startTask" onChange={startDateChangeHandler} />
      </p>
      <p>
        <label>End Date</label>
        <input type="text" id="endTask" onChange={endDateChangeHandler} />
      </p>
      <p>
        <button className={classes.addBtn} onClick={submitHandler}>
          Submit
        </button>
      </p>

      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.taskid}>
              <td>{task.task}</td>
              <td>{task.startDate}</td>
              <td>{task.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
