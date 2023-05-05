import { useState } from "react";

import classes from "./Task.module.css";
import Modal from "./Modal";
import TaskList from "./TaskList";


function Task(props) {
  const [taskListVisibility, setTaskListVisibility] = useState(false);

  function openTaskList() {
    setTaskListVisibility(true);
  }

  return (
    <>
      {taskListVisibility ? (
        <Modal>
          <TaskList tableTitle={props.title}/>
        </Modal>
      ) : null}

      <li className={classes.task}>
        <p className={classes.title}>{props.title}</p>
        <button onClick={openTaskList} className={classes.openListBtn}>
          Open
        </button>
      </li>
    </>
  );
}

export default Task;
