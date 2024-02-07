import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext2 } from '../hooks/CartContext2';

const CartPopUp = ({ isOpen, closeCart }) => {
  const cartStyle = {
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.9s ease-in-out',
  };

  const { cart } = useContext(CartContext2);

  return (
    <div
      className={`position-fixed shadow end-0 bg-light ${
        isOpen ? '' : 'd-none'
      }`}
      style={{ width: '25rem', ...cartStyle, zIndex: 1050 }}
    >
      <div
        className='container my-5 p-4 mt-0 bg-light'
        style={{ width: '23rem', overflowY: 'auto' }}
      >
        <h5 className='text-center mt-3'>My Book Cart</h5>
        <hr />

        <ul>
          {cart.map(
            (
              { id, title, quantity } // Destructure id, title, and quantity from each item
            ) => (
              <li key={id}>
                {title} - {quantity}{' '}
                <button className='btn btn-warning'>remove</button>
              </li>
            )
          )}
        </ul>

        {/* <div>Total: {totalAmount}</div> */}

        <div className='d-flex justify-content-between mt-3'>
          <Link to='/checkout' className='btn btn-success'>
            CHECKOUT
          </Link>

          <button className='btn btn-danger'>Clear</button>

          <button className='btn btn-secondary' onClick={closeCart}>
            Close Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPopUp;
