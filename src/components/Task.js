import classes from "./Task.module.css";

function Task(props) {
  return (
    <li className={classes.task}>
      <p className={classes.title}>{props.title}</p>
      <p className={classes.description}>{props.description}</p>
      <button onClick={() => alert('button click catched')} className={classes.openListBtn}>Open</button>
    </li>
  );
}

export default Task;
