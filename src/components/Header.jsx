import React from 'react';
import './Header.css';


class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <a className="header__author" href="./">Nikita Galtsev</a>
        <nav className="header__menu">
          <ul className="header__menu">
            <li className="header__menu-item">Обо мне</li>
            <li className="header__menu-item">Портфолио</li>
            <li className="header__menu-item">Контакты</li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;