import { useState } from "react";
import "./App.css";
import TasksList from "./components/TasksList";
import Header from "./components/Header";

function App() {
  const [modalVisibility, setModalVisibility] = useState(false);

  function showModalHandler() {
    setModalVisibility(true);
  }

  function hideModalHandler() {
    setModalVisibility(false);
  }

  return (
    <>
      <main>
        <Header onCreateList={showModalHandler} />
        <TasksList
          isPosting={modalVisibility}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
