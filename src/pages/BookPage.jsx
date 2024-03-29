import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import RatingStars from '../components/RatingStars';
import { CartContext2 } from '../hooks/CartContext2';

const BookPage = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [storedRating, setStoredRating] = useState(null);
  const { addItem } = useContext(CartContext2);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        const data = await response.json();

        setBookDetails(data);
        console.log(data); // Move the console.log statement here
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();

    const storedRatingData = localStorage.getItem(`reviewData${id}`);
    if (storedRatingData) {
      const parsedData = JSON.parse(storedRatingData);
      setStoredRating(parsedData.rating);
    }
  }, [id]);

  return (
    <div className='container'>
      {bookDetails ? (
        <div className='card' style={{ width: '18rem' }}>
          <img
            src={bookDetails.volumeInfo.imageLinks.thumbnail}
            className='card-img-top'
            alt={bookDetails.volumeInfo.title}
          />

          <div className='card-body'>
            <h5 className='card-title'>{bookDetails.volumeInfo.title}</h5>
            {storedRating ? (
              <RatingStars value={storedRating} edit={false} />
            ) : (
              <RatingStars value={0} edit={false} />
            )}
            <p className='card-text'>{bookDetails.volumeInfo.description}</p>
            <button
              className='btn btn-primary'
              onClick={() =>
                addItem(
                  bookDetails.id,
                  bookDetails.volumeInfo.title,
                  bookDetails.saleInfo.listPrice.amount
                )
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default BookPage;
