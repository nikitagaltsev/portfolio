import React from 'react';
import './Header.scss';


class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <a className="header__author" href="./">Nikita Galtsev</a>
        <nav className="header__menu">
          <ul className="header__menu">
            <li className="header__menu-item">
              <a className="header__menu-link" href="./">
                Обо мне
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="./">
                Портфолио
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="./">
                Контакты
              </a>
           </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;