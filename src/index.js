import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { completedTask, titleChanged, taskDelete } from "./store/task";

const store = configureStore();

const App = () => {
  const [state, setState] = useState(store.getState());

  const taskComplete = (id) => {
    store.dispatch(completedTask(id));
  };

  const changeTitle = (id) => {
    store.dispatch(titleChanged(id));
  };

  const deleteTask = (id) => {
    store.dispatch(taskDelete(id));
  };

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  return (
    <>
      <h1>Redux Clone </h1>
      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p> {el.title} </p>
            <p>{`Completed: ${el.completed}`}</p>
            <button onClick={() => taskComplete(el.id)}>Complete</button>
            <button onClick={() => changeTitle(el.id)}>Change title</button>
            <button onClick={() => deleteTask(el.id)}>Delet task</button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
