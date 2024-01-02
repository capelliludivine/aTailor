import React, { useState } from 'react';
import './Navbar.scss';
import Button from '../Button/Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>+</div>
      </div>
      <div className={`navbar-buttons ${isMenuOpen ? 'show' : ''}`}>
        <Button className="button-cloth" text="Créer mon vêtement" />
        <div>Pourquoi ?</div>
        <div>Notre Histoire</div>
      </div>
      <div className="navbar-logo">
        <img src="images/Logo.png" alt="Logo" />
      </div>
      <div className="navbar-profile">
        <div className="navbar-profile-round">
          <img src="images/profil.png" alt="Profil" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
