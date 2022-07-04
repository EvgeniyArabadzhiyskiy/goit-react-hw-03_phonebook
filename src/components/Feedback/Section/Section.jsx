import PropTypes from 'prop-types';
import { Title } from './Section.styled';

const Section = ({ title }) => (
  <div>
    <Title>{title}</Title>
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
