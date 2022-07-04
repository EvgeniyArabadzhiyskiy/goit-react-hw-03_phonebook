import PropTypes from 'prop-types';
import { Title } from './Notification.styled';

const Notification = ({ message }) => <Title>{message}</Title>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
