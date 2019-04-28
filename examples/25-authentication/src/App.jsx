import React, { Component } from "react";
import axios from "axios";

const url =
  "http://graduateportal-dev.tw7ahpynm7.us-east-2.elasticbeanstalk.com/api/login";

class App extends Component {
  state = {
    username: "",
    password: "",
    isLoading: false,
    errorMessage: "",
    count: 0
  };
  set = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.login();
  };
  login = () => {
    this.setState({ isLoading: true, errorMessage: "" });
    axios({
      url,
      method: "POST",
      data: {
        username: this.state.username,
        password: this.state.password
      }
    })
      .then(response => {
        const { isSuccess, token, message } = response.data;
        if (isSuccess && token) {
          localStorage.setItem("token", token); // Adds token to local storage
          this.setState({
            isLoading: false
          });
        } else {
          this.setState({
            isLoading: false,
            errorMessage: message || "Oops! An unexpected error occurred."
          });
        }
      })
      .catch(err => {
        console.error(err);
        this.setState({
          isLoading: false,
          errorMessage: "Oops! An unexpected error occurred."
        });
      });
  };
  logout = () => {
    // Logs out by deleting token and re-rendering
    localStorage.removeItem("token");

    // Only doing this so that the component will re-render
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    // If has token, the user is logged in
    if (localStorage.getItem("token")) {
      return (
        <div className="container mb-5">
          <h1 className="h2">You are logged in!</h1>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.logout}
          >
            Logout
          </button>
        </div>
      );
    }

    // If missing token, the user needs to login and shows login form
    return (
      <div className="container mb-5">
        <h1>Login</h1>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="mr-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control mr-3"
              onChange={this.set}
              value={this.state.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="mr-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control mr-3"
              onChange={this.set}
              value={this.state.password}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={this.state.isLoading}
          >
            {this.state.isLoading ? "Loading ..." : "Login"}
          </button>
        </form>
        {this.state.errorMessage && (
          <div className="text-danger">{this.state.errorMessage}</div>
        )}
      </div>
    );
  }
}

export default App;
