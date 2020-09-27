import React from 'react';
import classes from './Github.module.scss'
import logo from '../../assets/014-github.png'

const Github = () => {
  return (
    <a href="github.com" target="_blanc" className={classes.link}>
      <img src={logo} className={classes.image} alt="Иконка ЛинкедИн"/>
    </a>
  )
}


export default Github;