import { MdTask, MdAddTask } from "react-icons/md";
import classes from "./Header.module.css";

function MainHeader({ onCreateList }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdTask />
        Todo List
      </h1>
      <p>
        <button className={classes.button} onClick={onCreateList}>
          <MdAddTask size={18} />
          Add List
        </button>
      </p>
    </header>
  );
}

export default MainHeader;