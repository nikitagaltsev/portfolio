import React from 'react';
import classes from './Socials.module.scss'
import Instagram from './Instagram'
import LinkedIn from './LinkedIn'
import Twitter from './Twitter'
import Github from './Github'

const Socials = () => {
  return (
    <ul className={classes.socials}>
      <li className={classes.socials__item}>
        <Instagram/>
      </li>
      <li className={classes.socials__item}>
        <LinkedIn/>
      </li>
      <li className={classes.socials__item}>
        <Twitter/>
      </li>
      <li className={classes.socials__item}>
        <Github/>
      </li>
    </ul>
  )
}

export default Socials;