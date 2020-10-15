import React from 'react';
import './header.scss';
import Nav from '../nav/nav';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-logo'></div>
      <Nav />
      <div className='header-social'></div>
    </header>
  );
};

export default Header;
