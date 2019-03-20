/**
 * Complete this Todo List app.
 * Your input and form should be controlled. This means when the user types text in the textbox,
 * it should be stored in state and submitting the form should not refresh the page.
 * When the user clicks on the "Add" button, the text in the textbox should be placed in the Todo List.
 * You will need to pass the text down to the list "ListItem" component.
 * When the user clicks on the "X" in the ListItem, it should be deleted from the Todo list.
 */

import React, { Component } from "react";
import ListItem from "./ListItem/ListItem";

class App extends Component {
  state = {
    userInput: "",
    todos: []
  };
  setUserInput = userInput => this.setState({ userInput });
  add = e => {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.userInput],
      userInput: ""
    });
  };
  delete = deleteIndex => {
    const todos = this.state.todos.filter((todo, index) => {
      return index !== deleteIndex;
    });
    this.setState({ todos });
  };
  render() {
    return (
      <div className="container mt-4">
        <header className="App-header">
          <h1>Todo List</h1>
          <form className="form-group" onSubmit={this.add}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter text"
                aria-label="Enter text"
                aria-describedby="button-add"
                value={this.state.userInput}
                onChange={e => this.setUserInput(e.target.value)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="subimit"
                  id="button-add"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </header>
        <ul className="list-group">
          {this.state.todos.map((todo, index) => {
            return (
              <ListItem
                key={`todo-${index}`}
                index={index}
                delete={this.delete}
              >
                {todo}
              </ListItem>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
