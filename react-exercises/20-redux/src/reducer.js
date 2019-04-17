import * as types from "./constants/actionTypes";

const reducer = (
  /**
   * Starting state.
   * You may want to add more values here
   */
  state = {
    count: 0,
    todos: ["Finish this assignment", "Read a book"],
    isVisible: false,
    color: "",
    todoInput: ""
  },
  action
) => {
  console.log("action", action);
  switch (action.type) {
    case types.INCREASE_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    /**
     * Add additional case statements here
     */
    case types.DECREASE_COUNT:
      return {
        ...state,
        count: state.count - 1
      };

    case types.UPDATE_TODO_INPUT:
      return {
        ...state,
        todoInput: action.todoInput,
      };

      case types.TOGGLE_TEXT:
      return {
        ...state,
        isVisible: !state.isVisible
      };

      case types.SELECT_COLOR:
      return {
        ...state,
        color: action.color
      };
      case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, state.todoInput]
      };

    default:
      return state;
  }
};

export default reducer;
