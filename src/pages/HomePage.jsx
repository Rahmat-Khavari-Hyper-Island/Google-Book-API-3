import { useContext } from 'react';
import CardItem from '../components/CardItem';
import { BookContext } from '../hooks/bookContext';
import { CartContext2 } from '../hooks/CartContext2';

const Homepage = () => {
  const { books } = useContext(BookContext);
  const { addItem } = useContext(CartContext2);

  const handleAddItemToCart = (id, title) => {
    addItem(id, title);
  };

  return (
    <div className='container p-2'>
      <div className='d-flex row justify-content-center align-items-center g-3'>
        {books.map((book) => (
          <CardItem
            key={book.id}
            image={book.volumeInfo.imageLinks.thumbnail ?? noImage}
            title={book.volumeInfo.title}
            id={book.id}
            price={
              book.saleInfo.listPrice
                ? book.saleInfo.listPrice.amount
                : 'No Price'
            }
            currency={
              book.saleInfo.listPrice
                ? book.saleInfo.listPrice.currencyCode
                : ''
            }
            addToCart={() => {
              handleAddItemToCart(book.id, book.volumeInfo.title);
            }}
            isForSale={book?.saleInfo?.listPrice !== undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
