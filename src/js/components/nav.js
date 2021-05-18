import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/loans">Loans</Link>
        </li>
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link to="/kiwi">Kiwi</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
