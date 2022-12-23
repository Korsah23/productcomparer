import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="navbar">
      <Link to="/"><p className="navbar-brand">Home</p></Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/signup"><p className="nav-link">Signup</p></Link>
        </li>
        <li className="nav-item">
          { props.user?<Link to="/login" ><p className="nav-link" onClick={props.logoutUser}>Logout</p></Link>:<Link to="/login"><p className="nav-link">Login</p></Link>}
        </li>
        <li className="nav-item">
          <Link to="/about"><p className="nav-link">About</p></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
