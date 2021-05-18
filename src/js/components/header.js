import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = (props) => {
  const title = useSelector((state) => state.app.name);
  console.log(title);
  return (
    <header>
      <div>{title}</div>
      <nav>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
