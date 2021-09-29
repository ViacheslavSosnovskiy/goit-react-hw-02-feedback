import React from "react";
// import Dropdown from "./Dropdown/Dropdown";
// import Statistics from "./Statistics";
import Notification from "./Notification";

const App = () => {
  return (
    <div>
      <h1>Please leave feedback</h1>
      {/* <Statistics />, */}
      <Notification message="No feedback given" />
    </div>
  );
};
// <Dropdown />;
// <FeedbackOptions options={} onLeaveFeedback={} />

export default App;
