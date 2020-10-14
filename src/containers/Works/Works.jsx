import React, { Component } from "react";
import classes from "./Works.module.scss";
import russiaTrip from "../../assets/russia.jpg";
import rakLechitsa from "../../assets/raklechitsa.jpg";
import newsAnalyzer from "../../assets/newsanalyzer.jpg";
import vuexLogo from "../../assets/vuex.svg";
import gitLogo from "../../assets/014-github.png";

class Works extends Component {
  state = {
    vue: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/277px-Vue.js_Logo_2.svg.png",
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
    javascript: (
      <svg viewBox="0 0 128 128"
      
      >
        <path fill="#F0DB4F" d="M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
      </svg> 
    ),
    html: (
      <svg viewBox="0 0 128 128">
        <path fill="#E44D26" d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z"></path><path fill="#EBEBEB" d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
      </svg> 
    ),
    css: (
      <svg viewBox="0 0 128 128">
        <path fill="#1572B6" d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
      </svg> 
    ),
    webpack: (
      <svg viewBox="0 0 128 128"
      style={{
          fill: "#fff",
        }}>
        <path class="cls-1" d="M117.29,98.1,66.24,127V104.49L98,87,117.29,98.1Zm3.5-3.16V34.55L102.11,45.35V84.16l18.67,10.77ZM10.71,98.1l51,28.88V104.49L29.94,87Zm-3.5-3.16V34.55L25.89,45.35V84.16Zm2.19-64.3L61.76,1V22.76L28.21,41.21l-.27.15Zm109.18,0L66.24,1V22.76L99.79,41.2l.27.15,18.54-10.71Z"></path><path class="cls-1" d="M61.76,99.37,30.37,82.1V47.92L61.76,66Zm4.48,0L97.63,82.12V47.92L66.24,66ZM32.5,44,64,26.66,95.5,44,64,62.16,32.5,44Z"></path>
      </svg> 
    ),
    figma: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOCA1NyIgY2xhc3M9InN2ZyI+CiAgPHBhdGggZmlsbD0iIzFhYmNmZSIgZD0iTTE5IDI4LjVhOS41IDkuNSAwIDEgMSAxOSAwIDkuNSA5LjUgMCAwIDEtMTkgMHoiLz4KICA8cGF0aCBmaWxsPSIjMGFjZjgzIiBkPSJNMCA0Ny41QTkuNSA5LjUgMCAwIDEgOS41IDM4SDE5djkuNWE5LjUgOS41IDAgMSAxLTE5IDB6Ii8+CiAgPHBhdGggZmlsbD0iI2ZmNzI2MiIgZD0iTTE5IDB2MTloOS41YTkuNSA5LjUgMCAxIDAgMC0xOUgxOXoiLz4KICA8cGF0aCBmaWxsPSIjZjI0ZTFlIiBkPSJNMCA5LjVBOS41IDkuNSAwIDAgMCA5LjUgMTlIMTlWMEg5LjVBOS41IDkuNSAwIDAgMCAwIDkuNXoiLz4KICA8cGF0aCBmaWxsPSIjYTI1OWZmIiBkPSJNMCAyOC41QTkuNSA5LjUgMCAwIDAgOS41IDM4SDE5VjE5SDkuNUE5LjUgOS41IDAgMCAwIDAgMjguNXoiLz4KPC9zdmc+Cg==',
    trello: (
      <svg viewBox="0 0 128 128">
        <path fill="#23719F" d="M127 16.142c0-8.363-6.779-15.142-15.142-15.142h-95.716c-8.363 0-15.142 6.779-15.142 15.142v95.715c0 8.364 6.779 15.143 15.142 15.143h95.716c8.363 0 15.142-6.779 15.142-15.143v-95.715zm-69 83.398c0 3.807-3.286 6.46-7.093 6.46h-27.344c-3.807 0-6.563-2.653-6.563-6.46v-76.31c0-3.808 2.756-7.23 6.563-7.23h27.344c3.807 0 7.093 3.422 7.093 7.23v76.31zm55-66.456v31.886000000000003c0 3.807-2.936 7.03-6.744 7.03h-27.33c-3.808 0-6.926-3.224-6.926-7.03v-42.104c0-3.808 3.118-6.866 6.926-6.866h27.33c3.808 0 6.744 3.058 6.744 6.866v10.218z"></path>
      </svg>
    )
  };

  render() {
    return (
      <section className={classes.works}>
      <h2 className={classes.works__title}>Мои работы</h2>
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
                <p className={classes.description__stack}>Применяемый стек технологий</p>
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
                      style={{
                      marginTop: '10px'
                    }}
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
                  <li className={classes.description__item}>
                    {" "}
                    {this.state.trello}{" "}
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
              <div className={classes.description}>
                <h3 className={classes.description__title}>newsAnalyzer</h3>{" "}
                <p className={classes.description__paragraph}>
                  Дипломный проект в Яндекс.Практикум. Сервис анализа популярности новостей по ключевому слову используя newsapi.org.
                </p>{" "}
                <p className={classes.description__stack}>Применяемый стек технологий</p>
                <ul className={classes.description__list}>
                  <li className={classes.description__item}>
                    {this.state.html}
                  </li>{" "}
                  <li className={classes.description__item}>
                    {this.state.css}
                  </li>{" "}
                  <li className={classes.description__item}>
                    {this.state.javascript}
                  </li>{" "}
                  <li className={classes.description__item}>
                    {this.state.webpack}
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
              <div className={classes.description}>
                <h3 className={classes.description__title}>Russia Trip</h3>{" "}
                <p className={classes.description__paragraph}>
                  Один из учебных проектов в Яндекс.Практикум. Создан для оттачивания навыков адаптивной и семантичной верстки.
                </p>{" "}
                <p className={classes.description__stack}>Применяемый стек технологий</p>
                <ul className={classes.description__list}>
                  <li className={classes.description__item}>
                    {this.state.html}
                  </li>{" "}
                  <li className={classes.description__item}>
                    {this.state.css}
                  </li>{" "}
                  <li className={classes.description__item}>
                    {this.state.javascript}
                  </li>{" "}
                  <li className={classes.description__item}>
                    {" "}
                    {this.state.bem}{" "}
                  </li>
                  <img
                    className={classes.description__image}
                    src={this.state.figma}
                    alt="Figma"
                    style={{
                      height: '40px'
                    }}
                    />
                </ul>{" "}
              </div>{" "}
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
