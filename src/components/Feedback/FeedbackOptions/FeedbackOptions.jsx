import PropTypes from 'prop-types';
import { ButtonBox, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsTag = Object.keys(options);

  return (
    <ButtonBox>
      {optionsTag.map(item => {
        const capitalizedTag = item[0].toUpperCase() + item.slice(1);

        return (
          <Button
            key={item}
            type="button"
            onClick={() => onLeaveFeedback(item)}
          >
            {capitalizedTag}
          </Button>
        );
      })}
    </ButtonBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

