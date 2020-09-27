import React, {Component} from 'react';
import classes from './Primary.module.scss';
import Socials from './UI/Socials';
import ArrowDown from './UI/ArrowDown'

class Primary extends Component {
  
  componentDidMount() {
    const TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      const that = this;
      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

      setTimeout(function() {
      that.tick();
      }, delta);
  };

  window.onload = function() {
      const elements = document.getElementsByClassName('classes.primary__span');
      for (let i=0; i<elements.length; i++) {
          let toRotate = elements[i].getAttribute('data-type');
          let period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
      }
    };
  } 


  render() {
    return (
      <section className={classes.primary}>
        {/* <h1 className={classes.primary__title}>Nikita Galtsev x&nbsp;<span className="classes.primary__span" data-period="2000" data-type='["Frontend Developer", "Cinemaholic", "Marathon Runner"]'></span></h1> */}

        <h1 className={classes.primary__title}>Вася Широков x&nbsp;<span className="classes.primary__span" data-period="2000" data-type='["Хуесос", "Заглот", "Выблядок"]'></span></h1>

        <Socials/>
        <ArrowDown/>
        
      </section>
    )}
};

export default Primary;