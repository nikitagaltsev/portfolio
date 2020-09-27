import React from 'react';
import classes from './Twitter.module.scss'
import logo from '../../assets/013-twitter.png'

const Twitter = () => {
  return (
    <a href="twitter.com" target="_blanc" className={classes.link}>
      <img src={logo} className={classes.image} alt="Иконка Твиттера"/>
    </a>
  )
}


export default Twitter;