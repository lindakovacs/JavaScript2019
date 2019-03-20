import React from "react";

function IsUserLoggedIn(props) {
  return (
    <ul>
      {props.Users.map((user, index) => {
        const key = `user-${index}`;
        return (
          <li key={key}>
            {user.name} is{" "}
            {user.isUserLoggedIn ? "is logged in" : "is NOT logged in"}.
          </li>
        );
      })}
    </ul>
  );
}

export default IsUserLoggedIn;
