import React from 'react';
import classes from './ArrowDown.module.scss'

const ArrowDown = () => {
  return (
    <div className={classes.center_con}>
      <div className={classes.round}>
        <div id={classes.cta}>
            <span className={`${classes.arrow} ${classes.primera} ${classes.next}`}></span>
            <span className={`${classes.arrow} ${classes.segunda} ${classes.next}`}></span>
        </div>
      </div>
    </div>
  )
}

export default ArrowDown;