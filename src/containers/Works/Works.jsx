import React, { Component } from "react";
import classes from "./Works.module.scss";
import russiaTrip from "../../assets/russia.jpg";
import rakLechitsa from "../../assets/raklechitsa.jpg";
import newsAnalyzer from "../../assets/newsanalyzer.jpg";
import vuexLogo from "../../assets/vuex.svg";
import gitLogo from "../../assets/014-github.png";

class Works extends Component {
  state = {
    vue:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/277px-Vue.js_Logo_2.svg.png",
    nuxt: "https://ru.nuxtjs.org/logos/nuxtjs-typo-white.svg",
    vuex: vuexLogo,
    git: gitLogo,
    bem: (
      <svg
        className={classes.description__image}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 101.7 84"
        style={{
          fill: "#fff",
        }}
      >
        <path d="M0 13h23.8v7H0zM0 0h23.8v7H0zm42.7 25.9H0v7h41.1c4.5 0 15 .1 18.9 6.4v-3.9c-1.9-6.2-7.5-9.5-17.3-9.5zm.1 13H0v7h41.1c10 0 16.3.4 18.9 1.8v-3.1c-2-4.9-10.4-5.7-17.2-5.7zm-.1 33H0v-7h41.1c4.5 0 15-.1 18.9-6.4v3.9c-1.9 6.2-7.5 9.5-17.3 9.5zm.1-13H0v-7h41.1c10 0 16.3-.4 18.9-1.8v3.1c-2 4.9-10.4 5.7-17.2 5.7zM70.4 84h31.4v-4.3H71.3c-2.7 0-9.1-.1-11.4-3.8v2.4C61 82 64.4 84 70.4 84zm-.1-7.9h31.4v-4.3H71.3c-6.1 0-9.9-.2-11.4-1.1v1.9c1.2 3 6.3 3.5 10.4 3.5z">
          {" "}
        </path>{" "}
      </svg>
    ),
  };

  render() {
    return (
      <section className={classes.works}>
        <ul className={classes.works__list}>
          <li className={classes.works__item}>
            <a
              className={classes.works__link}
              href="https://prakt-rak-lechitsa.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={classes.description}>
                <h3 className={classes.description__title}> Раклечится </h3>{" "}
                <p className={classes.description__paragraph}>
                  Командный проект для благотворительного фонда“ Раклечится”
                  Константина Хабенского.{" "}
                </p>{" "}
                <ul className={classes.description__list}>
                  <li className={classes.description__item}>
                    <img
                      className={classes.description__image}
                      src={this.state.vue}
                      alt="Vue"
                    />
                  </li>{" "}
                  <li className={classes.description__item}>
                    <img
                      className={`${classes.description__image} ${classes.description__image_nuxt}`}
                      src={this.state.nuxt}
                      alt="Nuxt"
                    />
                  </li>{" "}
                  <li className={classes.description__item}>
                    <img
                      className={classes.description__image}
                      src={this.state.vuex}
                      alt="Vuex"
                    />
                  </li>{" "}
                  <li className={classes.description__item}>
                    <img
                      className={classes.description__image}
                      src={this.state.git}
                      alt="Git"
                    />
                  </li>{" "}
                  <li className={classes.description__item}>
                    {" "}
                    {this.state.bem}{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
              <img
                className={classes.works__image}
                src={rakLechitsa}
                alt="Сайт Раклечится"
              />
            </a>{" "}
          </li>{" "}
          <li className={classes.works__item}>
            <a
              className={classes.works__link}
              href="https://nikitagaltsev.github.io/news-analyzer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={classes.works__image}
                src={newsAnalyzer}
                alt="Сайт анализатора новостей"
              />
            </a>{" "}
          </li>{" "}
          <li className={classes.works__item}>
            <a
              className={classes.works__link}
              href="https://nikitagaltsev.github.io/russia-trip/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={classes.works__image}
                src={russiaTrip}
                alt="Сайт о путешествиях по России"
              />
            </a>{" "}
          </li>{" "}
        </ul>{" "}
      </section>
    );
  }
}

export default Works;
