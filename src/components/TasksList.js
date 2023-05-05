import { useState } from "react";
import Task from "./Task";
import classes from "./TasksList.module.css";
import NewTaskList from "./NewTaskList";
import Modal from "./Modal";

function TasksList({ isPosting, onStopPosting }) {
  const [taskLists, setTaskLists] = useState([]);

  function addTaskHandler(taskData) {
    setTaskLists((existingTaskLists) => [taskData, ...existingTaskLists]);
  }

  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewTaskList onCancel={onStopPosting} onAddTask={addTaskHandler} />
        </Modal>
      ) : null}

      <ul className={classes.tasks}>
        {taskLists.map((taskList) => (
          <Task key={taskList.title} title={taskList.title} />
        ))}
      </ul>
    </>
  );
}

export default TasksList;
