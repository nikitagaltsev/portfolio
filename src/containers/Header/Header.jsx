import React, {Component} from 'react';
import classes from './Header.module.scss';


class Header extends Component {
  render() {
    return (
      <div className={classes.header}>
        <a className={classes.header__author} href="./">
          Nikita Galtsev
        </a>
        <nav className={classes.header__menu}>
          <ul className={classes.header__menu}>
            <li className={classes.header__menuItem}>
              <a className={classes.header__menuLink} href="./">
                Обо мне
              </a>
            </li>
            <li className={classes.header__menuItem}>
              <a className={classes.header__menuLink} href="./">
                Портфолио
              </a>
            </li>
            <li className={classes.header__menuItem}>
              <a className={classes.header__menuLink} href="./">
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