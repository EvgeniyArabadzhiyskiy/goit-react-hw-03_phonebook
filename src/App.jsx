import { useReducer } from 'react';

import Container from 'components/Container/Container';
import Section from 'components/Feedback/Section/Section';
import Notification from 'components/Feedback/Notification/Notification';
import Statistics from 'components/Feedback/Statistics/Statistics';
import FeedbackOptions from 'components/Feedback/FeedbackOptions/FeedbackOptions';

function feedbackReducer(state, { type, payload }) {
  return {
    ...state,
    [type]: state[type] + payload,
  };
}

const App = () => {
  const [feedbackTypes, dispatch] = useReducer(feedbackReducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onFeedbackBtnClick = feedback => {
    dispatch({ type: feedback, payload: 1 });
  };

  const getStateEntries = () => {
    return Object.entries(feedbackTypes);
  };

  const countTotalFeedback = () => {
    return getStateEntries().reduce((acc, value) => acc + value[1], 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(100 / (countTotalFeedback() / feedbackTypes.good));
  };

  return (
    <div>
      <Container>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={feedbackTypes}
          onLeaveFeedback={onFeedbackBtnClick}
        />

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
