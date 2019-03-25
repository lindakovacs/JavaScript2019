let state = {
  todos: ["clean my room", "wash the car", "shopping", "brush my teeth"]
};

const setState = obj => {
  state = Object.assign(state, obj);
};

const deleteTodo = index => {
  const newTodos = state.todos.filter((todo, i) => {
    return index !== i;
  });
  setState({ todos: newTodos });
};

deleteTodo(2);
console.log(state);
// e.g. { todos: ["clean my room", "wash the car", "brush my teeth"] }
