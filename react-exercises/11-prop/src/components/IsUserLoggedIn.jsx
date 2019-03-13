import React from 'react';

const IsUserLoggedIn = (props) => {

  return (
    <div>
      <ul> {
          props.Users.map((user) =>
          <div>
            <li >
              <p>{user.name} - <b>{user.IsUserLoggedIn ? 'currently' : 'not'}</b> logged in.</p>
            </li>
          </div>
        )}
      </ul>
    </div>
  )}


export default IsUserLoggedIn;