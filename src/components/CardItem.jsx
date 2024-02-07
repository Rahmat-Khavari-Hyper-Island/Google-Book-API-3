import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReviewModal from './ReviewModal';
import RatingStars from './RatingStars';

function makeShorterName(name) {
  let nameArray = name;
  if (name.length > 17) {
    nameArray = `${name.slice(0, 18)}...`;
  }

  return nameArray;
}

const CardItem = ({
  title,
  image,
  id,
  price,
  currency,
  addToCart,
  isForSale,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [storedRating, setStoredRating] = useState(0);

  useEffect(() => {
    const storedRatingData = localStorage.getItem(`reviewData${id}`);
    if (storedRatingData) {
      const parsedData = JSON.parse(storedRatingData);
      setStoredRating(parsedData.rating);
    }
  }, []);

  const toggleModal = (e) => {
    // e.stopPropagation();
    setShowModal(!showModal);
  };

  return (
    <div key={id} style={{ maxWidth: '14rem' }}>
      <div className='card align-items-center'>
        <Link to={`/books/${id}`}>
          <div
            className='overflow-hidden d-flex align-items-center'
            style={{ height: '20.5rem' }}
          >
            <img
              src={image}
              className='rounded object-cover w-100'
              alt={title}
            />
          </div>

          <div className='card-body py-0'>
            <h6 className='card-title fs-6'>{makeShorterName(title)}</h6>
          </div>
        </Link>

        {storedRating ? (
          <div>
            <RatingStars value={storedRating} edit={false} />
          </div>
        ) : (
          <RatingStars value={0} edit={false} />
        )}

        <span>{price + ' ' + currency}</span>

        <div className='d-flex gap-2 mb-3'>
          {isForSale ? (
            <button className='btn btn-primary' onClick={addToCart}>
              Add to Cart
            </button>
          ) : (
            <button className='btn btn-primary disabled' disabled>
              Loan
            </button>
          )}
          <button
            className='btn btn-info'
            data-bs-toggle='modal'
            data-bs-target={`#reviewModal${id}`}
            onClick={toggleModal}
          >
            Review
          </button>
          <ReviewModal
            id={id}
            title={title}
            show={showModal}
            handleClose={toggleModal}
            setStoredRating={setStoredRating}
          />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
