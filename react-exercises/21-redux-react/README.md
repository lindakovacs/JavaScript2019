# Connecting React to Redux

You will be connecting a presentational React compoents to the Redux store with a container.

## Getting Started

To begin, install and start the application from this directory:

```shell
git pull upstream master
cd react-exercises/21-redux-react
code . # If you want to open in a new VSCode window
yarn install
yarn start
```

## Instructions

There are two parts to this exercise. You can complete it in any order:

- Open _src/components/Counter/CounterContainer.js_ and setup a container for the Counter that you see on your screen.
- Open _src/components/Todo/Todo.jsx_. Refactor the React component so that it will use the props being passed down from its container instead of in-component state.
