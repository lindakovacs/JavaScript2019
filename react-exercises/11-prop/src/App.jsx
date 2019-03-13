import React, { Component } from "react";
// Import IsUserLoggedIn here
import IsUserLoggedIn from './components/IsUserLoggedIn';

class App extends Component {
  render() {
    const Users = [
      // Complete me
      {
        name: 'Matina',
        IsUserLoggedIn: true
      },
      {
        name: 'Jamal',
        IsUserLoggedIn: true
      },
      {
        name: 'Stacy',
        IsUserLoggedIn: false
      }
    ];
    return (
      <div className="App">
        {/* Add IsUserLoggedIn component here with props */}
        <IsUserLoggedIn Users={Users} />
      </div>
    );
  }
}

export default App;
