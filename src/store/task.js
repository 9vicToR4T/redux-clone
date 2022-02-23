// Aceasta este structura conform Ducks Pattern
// Totul este in acelasi file
// De la inceput punem actionTypes doar ca schimbam numele variabelelor
// Apoi actions
// Apoi reducer
// Ducks e bun cand nu avem mai mult de vrio 400 de randuri

const TASK_UPDATE = "task/updated";
const TASK_DELETE = "task/delete";

export function completedTask(id) {
  return {
    type: TASK_UPDATE,
    payload: { id, completed: true },
  };
}

export function titleChanged(id) {
  return {
    type: TASK_UPDATE,
    payload: { id, title: `New title ${id}` },
  };
}

export function taskDelete(id) {
  return {
    type: TASK_DELETE,
    payload: { id },
  };
}

export function taskReducer(state, action) {
  switch (action.type) {
    case TASK_UPDATE: {
      const newArray = [...state];
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      newArray[elementIndex] = {
        ...newArray[elementIndex],
        ...action.payload,
      };
      return newArray;
    }
    case TASK_DELETE: {
      const newArray = [...state];
      return newArray.filter((el) => el.id !== action.payload.id);
    }
    default:
      return state;
  }
}

export default taskReducer;
