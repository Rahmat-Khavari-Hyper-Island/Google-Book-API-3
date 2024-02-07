import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../hooks/CartContext';
import { ThemeContext } from '../hooks/themeContext';

const CartPopUp = ({ isOpen, closeCart }) => {
  const { items, totalAmount, removeItem, clearCart } = useContext(CartContext);

  const handleRemoveItemToCart = (id) => {
    removeItem(id);
  };

  const cartStyle = {
    // todo: animation does not work
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.9s ease-in-out',
  };
  const { darkMode } = useContext(ThemeContext);
  const bgColorClass = darkMode ? 'bg-dark' : 'bg-light';
  return (
    <div
      className={`position-fixed shadow end-0 ${bgColorClass} ${
        isOpen ? '' : 'd-none'
      }`}
      style={{ width: '25rem', ...cartStyle, zIndex: 1050 }}
    >
      <div
        className='container my-5 p-4  mt-0bg-light'
        style={{ width: '23rem', overflowY: 'auto' }}
      >
        {darkMode ? (
          <h5 className='text-center mt-3 text-white'>My Book Cart</h5>
        ) : (
          <h5 className='text-center mt-3'>My Book Cart</h5>
        )}
        <hr />

        {/* <ListGroup>
          {items.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.title} - {item.author}
            </ListGroup.Item>
          ))}
        </ListGroup> */}

        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.volumeInfo.title} - {item.volumeInfo.authors}{' '}
              <button
                className='btn btn-warning'
                onClick={() => {
                  handleRemoveItemToCart(item.id);
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <div>Total: {totalAmount}</div>

        <div className='d-flex justify-content-between mt-3'>
          <Link to='/checkout' className='btn btn-success'>
            CHECKOUT
          </Link>
          <button className='btn btn-danger' onClick={clearCart}>
            Clear
          </button>
          <button className='btn btn-secondary' onClick={closeCart}>
            Close Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPopUp;
