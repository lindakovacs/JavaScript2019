# Redux Thunk Challenge - CMA Awards

Using Redux Thunk, you will be performing an AJAX call to send a vote and you will show the voting selection in the UI.

## AJAX Requests

Here is the summary of the (faked) AJAX requests:

| Method | URL                            | Example Request                        |
| ------ | ------------------------------ | -------------------------------------- |
| GET    | http://localhost:7001/nominees |                                        |
| POST   | http://localhost:7001/vote     | {"categoryId": "1", "nomineeIndex": 0} |

The `http://localhost:7001/nominees` AJAX request, which gets a list of categories and nominees, was demostrated in class.

The `http://localhost:7001/vote` AJAX request is cast when a user votes for a country artist or album. For this assignment, you will be working on integrating this request into Redux.

## Server

In order for you to work on this assignment, you will need to install and start the back-end CMA server. Starting from the root of the _JavaScript2019_ repository:

```shell
cd react-exercises/22-redux-thunk/server
yarn install
yarn start
```

You will need to have this server running when you are working on today's assignment.

## Redux Thunk Assignment

Before writing any code, I recommend you take a look at both the _src/services/api.js_ file and the _src/reducer.js_ file, which have been completed for you.

To get started, open a new terminal / git bash window from the root of the _JavaScript2019_ repository and type:

```shell
cd react-exercises/22-cmas-thunk
yarn install
yarn start
```

You will need to have your app and the server running at the same time.

Open _src/constants/actionTypes.js_ and add the action types needed to make an AJAX call.

The reducer has code already written for you, but the code was commented so that it wouldn't crash the app. Now that you have your action types, open _src/reducer.js_ and uncomment where needed.

Setup your AJAX action creators. Follow the instructions in _src/actions/votingActions.js_

Now you just need to update the UI so that it will both cast the users vote, display the results, and give feedback for AJAX errors. Open _src/components/Category/Category.jsx_ and read the instructions.

Note that you can simulate AJAX errors by stopping the server.
