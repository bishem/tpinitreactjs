import React from 'react';
import { Logo } from '..';
import './Header.css';

const Header = () => {
  return (
    <header className='flex'>
      <Logo /> 
    </header>
  );
};

export default Header;