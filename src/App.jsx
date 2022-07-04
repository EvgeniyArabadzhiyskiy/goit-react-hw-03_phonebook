import { useState } from 'react';

import Container from 'components/Container/Container';
import Section from 'components/Feedback/Section/Section';
import Notification from 'components/Feedback/Notification/Notification';
import Statistics from 'components/Feedback/Statistics/Statistics';
import FeedbackOptions from 'components/Feedback/FeedbackOptions/FeedbackOptions';

let state = {};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  state = {
    good,
    neutral,
    bad,
  };

  const onFeedbackBtnClick = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const getStateEntries = () => {
    return Object.entries(state);
  };

  const countTotalFeedback = () => {
    return getStateEntries().reduce((acc, value) => acc + value[1], 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(100 / (countTotalFeedback() / state.good));
  };

  return (
    <div>
      <Container>
        <Section title="Please leave feedback" />
        <FeedbackOptions options={state} onLeaveFeedback={onFeedbackBtnClick} />

        <div>
          <Section title="Statistic" />
          {countTotalFeedback() ? (
            <Statistics
              stateEntries={getStateEntries()}
              totalFeedback={countTotalFeedback()}
              positiveFeedback={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </div>
      </Container>
    </div>
  );
};

export default App;
