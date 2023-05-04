import { useState } from "react";

import Task from "./Task";
import classes from "./TasksList.module.css";
import NewTask from "./NewTask";
import Modal from "./Modal";

function TasksList({ isPosting, onStopPosting }) {
  const [tasks, setTasks] = useState([]);

  function addTaskHandler(taskData) {
    setTasks((existingTasks) => [taskData, ...existingTasks]);
  }

  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewTask onCancel={onStopPosting} onAddTask={addTaskHandler} />
        </Modal>
      ) : null}

      <ul className={classes.tasks}>
        {tasks.map((task) => (
          <Task key={task.description} title={task.title} description={task.description} />
        ))}
      </ul>
    </>
  );
}

export default TasksList;
