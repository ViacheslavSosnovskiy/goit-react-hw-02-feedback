import "./feedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option) => {
        return (
          <button
            key={option}
            name={option}
            type="button"
            className={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
