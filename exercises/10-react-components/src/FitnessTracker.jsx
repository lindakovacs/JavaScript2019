/**
 * Build a fitness tracker app using two React components.
 * You will need to loop through the data from *./FitnessTrackerActivities.json*.
 * I suggest you open this file and take a look at it.
 * You cannot have any errors or warmings in the console when you render the app
 *
 * Here is the static HTML that you will work with inside React components.
 * You will need to convert this to JSX.
 * ```html
 * <main class="FitnessTracker">
 *   <!-- This part is repeated for each fitness activity (each run, hike or cycling trip tracked) -->
 *   <div class="FitnessActivity">
 *     <div class="FitnessActivity-startDate">2018-09-15 07:10:05</div>
 *     <div class="FitnessActivity-activity">Running</div>
 *     <div class="FitnessActivity-miles">3.1 miles</div>
 *     <div class="FitnessActivity-time">29:35</div>
 *   </div>
 * </main>
 * ```
 */

import React from "react";
import "./FitnessTracker.css";
// You will need to loop through "activities" data in your React components below
import activities from "./FitnessTrackerActivities.json";

function FitnessActivity(props) {}

function FitnessTracker() {
  return <>Put JSX Here</>;
}

export default FitnessTracker;
