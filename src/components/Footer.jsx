import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../hooks/themeContext';

const Footer = () => {
  const { bgColorClass, darkMode } = useContext(ThemeContext);
  const textColor = darkMode ? 'text-light' : 'text-dark';

  return (
    <div className={bgColorClass}>
      <div className='container'>
        <footer className='row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top  mb-0'>
          <div className='col mb-3'>
            <h5 className={textColor}>ABOUT HI LIBRARY</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <Link
                  to='/privacy'
                  className='nav-link p-0 text-body-secondary'
                >
                  Privacy Policy
                </Link>
              </li>
              <li className='nav-item mb-2'>
                <Link to='/terms' className='nav-link p-0 text-body-secondary'>
                  Terms of Use
                </Link>
              </li>

              <li className='nav-item mb-2'>
                <Link
                  to='/accessibility'
                  className='nav-link p-0 text-body-secondary'
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
          <div className='col mb-3'>
            <h5 className={textColor}>HELP & SUPPORT</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <Link
                  to='/contact'
                  className='nav-link p-0 text-body-secondary'
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
          <div className='col mb-3'>
            <h5 className={textColor}>Schedule</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2 text-body-secondary'>
                Monday-Sunday
              </li>
              <li className='nav-item mb-2 text-body-secondary'>9am-11pm</li>
            </ul>
          </div>
          <div className='col mb-3'>
            <h5 className={textColor}>Follow Me</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <a
                  href='https://github.com/Rahmat-Khavari-Hyper-Island/Google-Book-API-3'
                  className='nav-link p-0 text-body-secondary'
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className='col mb-3'>
            <h5 className={textColor}>Address</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2 text-body-secondary'>
                Virkesvägen 2, 12030, Stockholm
              </li>
            </ul>
          </div>
          <hr style={{ width: '100%' }} />
          <div className='d-flex justify-content-between w-100'>
            <div className='col mb-3'>
              <p className='text-body-secondary' style={{ fontSize: 'larger' }}>
                Hyper Island Libirary
              </p>
            </div>
            <div className='col mb-3'>
              <svg className='bi me-2' width='40' height='32'>
                <use xlinkHref='#bootstrap'></use>
              </svg>
              <p
                className='text-body-secondary'
                style={{ fontSize: 'smaller' }}
              >
                Copyright ©2024 Google Books, Inc or related companies. All
                rights reserved, including rights for text and data mining and
                training of artificial technologies or similar technologies.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
