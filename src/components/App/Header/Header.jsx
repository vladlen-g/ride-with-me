import React from 'react';
import { Link } from 'react-router';
require('./Header.scss');

function Header() {
  return (
    <div className="header">
      <div className="headerNav">
        <Link className="headerNavTab" to="home">Home</Link>
        <Link className="headerNavTab" to="about">About</Link>
      </div>
    </div>
  );
}

export default Header;