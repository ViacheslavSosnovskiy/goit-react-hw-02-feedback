// import s from "./statistics.css";

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>positiveFeedback: {positiveFeedback}</p>
    </div>
  );
};

export default Statistics;
