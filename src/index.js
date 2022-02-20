import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createStore } from "./store/createStore";
import { taskReducer } from "./store/taskReducer";
import * as actions from './store/actionTypes';

const initialStore =  [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: false },
  { id: 3, title: "Task 3", completed: false },
]

const store = createStore(taskReducer, initialStore);

const App = () => {
  const [state, setState] = useState(store.getState());

  const handleComplete = (id) => {
    store.dispatch({
      type: actions.taskUpdated,
      payload: { id: id, completed: true},
    });
  };

  const changeTitle = (taskId) => {
    store.dispatch({
      type: actions.taskUpdated,
      payload: { id: taskId, title: `New title ${taskId}` },
    });
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
            <button onClick={() => handleComplete(el.id)}>Complete</button>
            <button onClick={() => changeTitle(el.id)}>Change title</button>
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
