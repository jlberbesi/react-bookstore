import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const RemoveBookButton = ({ bookId }) => {
  const dispatch = useDispatch();

  return (
    <button type="button" onClick={() => dispatch(removeBook(bookId))}>
      Remove Book
    </button>
  );
};

RemoveBookButton.propTypes = {
  bookId: PropTypes.number.isRequired,
};

export default RemoveBookButton;
