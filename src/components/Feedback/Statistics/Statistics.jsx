import PropTypes from 'prop-types';
import { StatisticContainer, StatisticText } from './Statistics.styled';

const Statistics = ({ stateEntries, totalFeedback, positiveFeedback }) => {
  return (
    <StatisticContainer>
      {stateEntries.map(item => {
        const [feedbackKey, value] = item;
        const totalKey = feedbackKey[0].toUpperCase() + feedbackKey.slice(1);

        return (
          <StatisticText key={feedbackKey}>
            {totalKey}: {value}
          </StatisticText>
        );
      })}

      <StatisticText>Total Feedbacks: {totalFeedback}</StatisticText>

      <StatisticText>
        Positive Feedback: {positiveFeedback}%
      </StatisticText>
    </StatisticContainer>
  );
};

Statistics.propTypes = {
  stateEntries: PropTypes.arrayOf(PropTypes.array).isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
