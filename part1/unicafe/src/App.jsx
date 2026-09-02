import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const Statistics = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;

  const total = good + neutral + bad;
  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  const avg = (good - bad) / total;
  const positive = (good / total) * 100;
  return (
    <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="total" value={total} />
      <StatisticLine text="avg" value={avg} />
      <StatisticLine text="positive" value={positive} />
    </div>
  );
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function goodreview() {
    setGood((prevreview) => prevreview + 1);
  }

  function neutralreview() {
    setNeutral((prevreview) => prevreview + 1);
  }

  function badreview() {
    setBad((prevreview) => prevreview + 1);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <span>
        <button onClick={goodreview}>good</button>
        <button onClick={neutralreview}>neutral</button>
        <button onClick={badreview}>bad</button>
      </span>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
