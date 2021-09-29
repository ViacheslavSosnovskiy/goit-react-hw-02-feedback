import React, { Component } from "react";
// import Dropdown from "./Dropdown/Dropdown";
import Statistics from "./Statistics";
import Notification from "./Notification";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // s=

  onLeaveFeedback = (e) => {
    const { name } = e.target;
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
    });

    // const { name } = e.target;
    // console.log(name);
  };

  countTotalFeedback = () => {};

  countPositiveFeedback = () => {};

  render() {
    return (
      <div>
        <Statistics />
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Notification message="No feedback given" />
        <Section />
      </div>
    );
  }
}

export default App;
