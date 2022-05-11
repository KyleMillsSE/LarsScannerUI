import React from 'react';
import LarsLogo from '../../assets/lars-logo.png';

const Header = function Header() {
    return (
      <div>
        <img className="header__logo" src={LarsLogo} alt="LarsLogo" />
      </div>
    );
};

export default Header;
