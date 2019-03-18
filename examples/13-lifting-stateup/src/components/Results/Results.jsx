import React from "react";

function Results(props) {
  console.log(props);
  return (
    <div className="card card-body bg-light mb-4">
      Results:
      <ul className="list-unstyled mb-0">
        {Object.entries(props.fields).map(([name, value]) => {
          return (
            <li key={`field-${name}`}>
              {name}: {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Results;
