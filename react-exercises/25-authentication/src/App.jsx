/**
 * This login form is incomplete. You will need to:
 * - Update the form so that it will store the authentication token in local storage.
 * - Create a success page and fix the bug so that when the user logins in successfully,
 * he or she sees the success page instead of a "success" error message.
 * - Add a logout button on the success page get the logout function to work.
 *
 * The credentials you can use to login are:
 * Username: asdf
 * Password: 1234
 */

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
        // Update me to use local storage and fix bug
        localStorage.setItem("token", token);
        const { message } = response.data;
        this.setState({
          isLoading: false,
          errorMessage: message || "Oops! An unexpected error occurred."
        });
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
    // Complete me
    localStorage.removeItem("token");
    // Only doing this so that the component will re-render
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    // Show success form with logout button if the login is successful

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
