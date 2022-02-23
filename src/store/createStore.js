// asta e exemplul a cum ar fi createStore in js, care lucreaza asemanator cu cel din redux

export function createStore(reducer, initialState) {
  let state = initialState;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    // atunci cand schimbam state, avem nevoie sa chemam listeners pentru ca ei in continuare sa schimbe interface. Observer pattern
    // fiecare listener e o functie in cazul dat
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  return { getState, dispatch, subscribe };
}
