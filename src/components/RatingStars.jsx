// RatingStars.js
// import React, { useState } from "react";
import Rating from 'react-rating-stars-component';

const RatingStars = ({ value, setNewRating, edit }) => {
  //   const [rating, setRating] = useState(0);

  const handleRatingChange = (newValue) => {
    // setRating(newValue);
    setNewRating(newValue);
  };

  return (
    <div className='form-group'>
      {/* <label>Rating:</label> */}
      <Rating value={value} onChange={handleRatingChange} edit={edit} />
    </div>
  );
};

export default RatingStars;
