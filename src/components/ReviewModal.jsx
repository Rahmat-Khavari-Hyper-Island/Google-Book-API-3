import React, { useState, useContext } from 'react';
import RatingStars from './RatingStars';
import { BookContext } from '../hooks/bookContext';

const ReviewModal = ({ id, title, show, handleClose, setStoredRating }) => {
  const [rating, setRating] = useState(0);
  const { books } = useContext(BookContext);
  const item = books.find((book) => book.id === id);

  const handleSubmit = () => {
    const message = document.getElementById(`reviewModalMessage${id}`).value;

    const reviewData = {
      rating: rating,
      message: message,
    };

    const reviewDataJson = JSON.stringify(reviewData);

    localStorage.setItem(`reviewData${id}`, reviewDataJson);
    setStoredRating(rating);
    handleClose();
  };
  return (
    <div
      className={`modal fade ${show ? 'show' : ''}`}
      id={`reviewModal${id}`}
      tabIndex='-1'
      aria-labelledby={`modalLabel${id}`}
      aria-hidden={!show}
      style={{ display: show ? 'block' : 'none' }}
      // data-bs-backdrop='static'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id={`modalLabel${id}`}>
              Review for {title}{' '}
            </h5>
          </div>
          <div className='modal-header'>
            <h6>
              Author:
              {` ${item.volumeInfo.authors}`}
            </h6>
          </div>
          <div className='modal-body'>
            <RatingStars value={0} setNewRating={setRating} edit={true} />
            <div className='form-group'>
              <label htmlFor={`reviewModalMessage${id}`}>Message:</label>
              <textarea
                className='form-control'
                id={`reviewModalMessage${id}`}
                placeholder='Book review'
              ></textarea>
            </div>
          </div>

          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
              onClick={handleClose}
            >
              Close
            </button>
            <button
              type='button'
              className='btn btn-primary'
              data-bs-dismiss='modal'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
