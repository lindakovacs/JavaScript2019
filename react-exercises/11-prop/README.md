# React Props

In Visual Studio code, press `command+shift+v` (Mac) or `ctrl+shift+v` (Windows) to open a Markdown preview.

## Getting Started

Using your command line, you will need to navigate to the _react-exercises/11-prop/_ folder, install all dependencies, and start the app.

```bash
cd react-exercises/11-prop/
code . # if you would like to open this in a separate VSCode window
yarn install
yarn start
```

If, at any time, you need to stop the app, press `ctrl+c`.

## Instructions

### Step 1 - App.jsx

Complete the _Users_ constant with data like this:

```javascript
const Users = [
  {
    name: "Matina",
    isUserLoggedIn: false
  },
  {
    name: "Joe",
    isUserLoggedIn: true
  },
  {
    name: "Tom",
    isUserLoggedIn: true
  }
];
```

_Users_ should have a key name and value which should be the user's name. The second key should be _isUserLoggedIn_ and the value should be a boolean. The array should have at least 3 elements inside.

### Step 2 - IsUserLoggedIn.jsx

Create a stateless component called _IsUserLoggedIn_ that accepts the _Users_ constant as props that you created in _App.jsx_.

The stateless component should iterate over each value creating an un orderled listed displaying a message stating the user's name and if the user is logged in or not.

If you are unfamilar with unordered list, see [Unordered HTML List](https://www.w3schools.com/html/html_lists.asp)

### Step 3 - Back to App.jsx

Import the _IsUserLoggedIn_ component and include it where instructed. Be sure to pass the _Users_ constant in as props. Here is an example:

```jsx
<IsUserLoggedIn Users={Users}>
```
