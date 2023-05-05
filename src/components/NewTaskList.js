import { useState } from "react";
import classes from "./NewTaskList.module.css";
import axios from "axios";

function NewTaskList({ onCancel, onAddTask }) {
  const [enteredTitle, setEnteredTitle] = useState("");

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function submitHandler(event) {
    const cr8tbl = process.env.REACT_APP_CR8TBL;
    axios.post(cr8tbl, {
      name: enteredTitle
    }).then((response) => {
      console.log(response);
    });

    event.preventDefault();
    const taskData = {
      title: enteredTitle,
    };
    onAddTask(taskData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="name">Title</label>
        <input type="text" id="name" required onChange={titleChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewTaskList;
