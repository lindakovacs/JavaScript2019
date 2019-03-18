import React from "react";
import "./FitnessTracker.css";
import activities from "./FitnessTrackerActivities.json";

function FitnessActivity(props) {
  return (
    <div className="FitnessActivity">
      <div className="FitnessActivity-startDate">{props.startDate}</div>
      <div className="FitnessActivity-activity">{props.activity}</div>
      <div className="FitnessActivity-miles">{props.miles} miles</div>
      <div className="FitnessActivity-time">{props.time}</div>
    </div>
  );
}

function FitnessTracker() {
  return (
    <main className="FitnessTracker">
      {activities.map(activity => {
        const key = `activity-${activity.id}`;
        return (
          <FitnessActivity
            startDate={activity.startDate}
            activity={activity.activity}
            miles={activity.miles}
            time={activity.time}
            key={key}
          />
        );
      })}
    </main>
  );
}

export default FitnessTracker;
