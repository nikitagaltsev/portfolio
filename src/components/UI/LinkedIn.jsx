import React from 'react';
import classes from './LinkedIn.module.scss'
import logo from '../../assets/010-linkedin.png'

const Instagram = () => {
  return (
    <a href="linkedin.com" target="_blanc" className={classes.link}>
      <img src={logo} className={classes.image} alt="Иконка ЛинкедИн"/>
    </a>
  )
}


export default Instagram;