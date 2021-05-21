import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';



const Header = (props) => {
  let dispatch = useDispatch();
  let history = useHistory();
  const title = useSelector((state) => state.app.name);
  console.log(title);

  const user = useSelector((state) => state.auth.user.values);
  const Logout = (e) => {
    e.preventDefault();
    dispatch({type: "USER_RESET"})
    history.push('/login');
  };
  console.log(`user`, user)

  return (
    <header>
      <div>{title}</div>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>

        { user === null? <><li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li></> : <><li>
          <Link to="/logout"onClick={Logout}>Logout</Link>
          </li></> 
        }
        

      </nav>
    </header>
  );
};

export default Header;
