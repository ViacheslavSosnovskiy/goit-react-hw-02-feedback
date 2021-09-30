import s from "./feedbackOptions.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option) => {
        return (
          <button
            key={option}
            name={option}
            type="button"
            className={s.button}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
