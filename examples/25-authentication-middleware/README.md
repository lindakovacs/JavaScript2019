# Authentication and Middleware

This is an example of authentication and middleware in Redux. It uses Redux Thunk, Redux Promise, JWT tokens, local storage and the history API - all of which are used in the Graduate Portal.

## Starting the Server

Like the bookstore app, you need to run a server at the same time as the app. You actually already used and installed the server in another exercise (_22-redux-thunk_). To start the server, run the following in a new terminal or git bash window:

```
cd react-exercises/22-redux-thunk/server
yarn start
```

## Design & UI

[Watch a Video of the Prototype](https://www.screencast.com/t/1c0ejJFegjq)

The portal has 4 screens:

1. A login screen. Members of the CMAs will receive a member ID and a PIN number in the mail, which they will then access the voting portal
2. A home screen, which will display all the voting categories and will have a "Let's get started" link.
3. The nominee page, where the user will vote for the nominee that they want to win an award. This screen will repeat for each category when the user clicks on the "Next" button.
4. A submit votes screen, where once finished voting, the user will click a button to send their votes to the Country Music Awards.

## AJAX Overview

There are four AJAX requests. Here is the summary.

| Method | URL                            | Example Request                           | Needs Token? |
| ------ | ------------------------------ | ----------------------------------------- | ------------ |
| POST   | http://localhost:7001/signin   | {"memberId": "asdf", "pinNumber": "1234"} |              |
| GET    | http://localhost:7001/nominees |                                           |              |
| POST   | http://localhost:7001/vote     | {"categoryId": "1", "nomineeIndex": 0}    | Yes          |
| POST   | http://localhost:7001/complete |                                           | Yes          |

- `http://localhost:7001/signin` - This needs a member ID and PIN number that the user is signin in with.
- `http://localhost:7001/nominees` - This gets a list of nominees. Doesn't need any data.
- `http://localhost:7001/vote` - This needs who and what the user is voting for. This is a category ID and the nominee array index. Also requires the JWT token received from the signin call to be sent in the request headers.
- `http://localhost:7001/complete` - This is a call to complete the vote. Also requires the JWT token received from the signin call to be sent in the request headers.

## Middleware

This projects used a mix of Redux Thunk and Redux Promise examples. You should definitely look at the files that are in the actions folder.

| File                                   | Has Redux Thunk? | Has Redux Promise? | Has authentication? |
| -------------------------------------- | ---------------- | ------------------ | ------------------- |
| src/actions/fetchAllNomineesActions.js | Yes              |                    |                     |
| src/actions/votingActions.js           | Yes              | Yes                |                     |
| src/actions/signinActions.js           | Yes              | Yes                | Yes                 |

I included examples of Redux Thunk by itself so that you would have examples, but keep in mind that in some places where I used Redux Thunk, you could use Redux Promise instead.

## Authentication

There is a large chain of events. Here is a break down, file by file:

- `src/components/App.jsx` - this has the router and redirects to the login form if the user is logged in. If the user is logged in, then a JWT token will be stored in local storage.
- `src/components/Signin/Signin.jsx` - the user fills out a signin form. On submission, `Signin.jsx` calls on the action passed down from props (`this.props.signin`).
- `src/components/Signin/SigninContainer.js` - passes the signin action down as props.
- `src/actions/signinActions.js` - has two actions. The first will dispatch a signin AJAX loading request and call on the function that will perform the request.
- `src/services/api.js` - makes the signin AJAX request. If the AJAX request and user login is successful, a JWT token will be in the response. This will then store the JWT token in local storage.
- `src/reducer.js` - updates the global state. If the user logged in with the correct credentials, it will set _isSigninInvalid_ in state to false. Otherwise, this value will be true.
- `src/actions/signinActions.js` - back to this file. The second action in this file handles the response of the AJAX request. If the AJAX request and user login is successful, a JWT token will be in the response. If the JWT token is in the response, it will use the History API to redirect the user to the home page.
- `src/components/Signin/SigninContainer.js` - passes down _isSigninInvalid_ from global state as props.
- `src/components/Signin/Signin.jsx` - if the user did not enter the right credentials, an error message will appear telling the user that their member ID or PIN number is wrong. It knows this because `this.props.isSigninInvalid` is true.
