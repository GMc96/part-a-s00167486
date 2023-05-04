import { useState } from "react";
import classes from "./NewTask.module.css";

function NewTask({ onCancel, onAddTask }) {
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");

  function descriptionChangeHandler(event) {
    setEnteredDescription(event.target.value);
  }

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const taskData = {
      description: enteredDescription,
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
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" required rows={3} onChange={descriptionChangeHandler} />
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

export default NewTask;
