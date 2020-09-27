import React from 'react';
import classes from './Instagram.module.scss'
import logo from '../../assets/011-instagram.png'

const Instagram = () => {
  return (
    <a href="instagram.com" target="_blanc" className={classes.link}>
      <img src={logo} className={classes.image} alt="Иконка Инстаграма"/>
    </a>
  )
}


export default Instagram;