import PropTypes from 'prop-types';
import { ContactName, ContactNumber } from './contactItem.styled';

export const ContactItem = ({ name, number }) => {
  return (
    <>
      <ContactName>{name}: </ContactName>
      <ContactNumber>{number}</ContactNumber>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
