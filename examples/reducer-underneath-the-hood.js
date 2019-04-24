let state = {
  foo: "bar",
  todoInput: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        todoInput: action.todoInput
      };
    // Best practice to include, in case no types match
    default:
      return state;
  }
};

const action = {
  type: "UPDATE",
  todoInput: "Hi there"
};

state = reducer(state, action);
console.log(state);
