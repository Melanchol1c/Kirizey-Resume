import React from "react";
import "./About.scss";
import Photo from "../../assets/1.jpg";
import LazyLoad from "react-lazyload";

const About = () => (
  <LazyLoad height={200}>
    <section className="about">
      <div className="container">
        <Title />
        <MainPart />
      </div>
    </section>
  </LazyLoad>
);

const Title = () => (
  <div className="about__title">
    <h2 className="title">About me</h2>
  </div>
);

const MainPart = () => (
  <div className="row">
    <div className="col-xs-10 col-xl-4 col-lg-4 col-md-6 col-sm-8 offset-xl-0 offset-sm-2 offset-lg-0 offset-md-3 offset-xs-1 about__img">
      <img src={Photo} alt="my_photo" />
      <div className="border" />
    </div>
    <div className="col-xs-12 col-xl-8 col-lg-8 col-md-12 col-sm-12 offset-xl-0 offset-sm-0 offset-lg-0 offset-xs-0  about__info">
      <div className="about__info-wrapper">
        <p>
          Hi! My name is <strong> Kirill Valirskiy</strong>. I have been doing
          in front-end development for about a year, and in parallel I study in
          the Siberian Federal University in the Space and Information
          Technologies Institute at the third year of specialization Information
          Systems and Technologies. For my small development path, I worked on 3
          real projects, made several home projects and wrote several course
          works associated with writing a program in the C# language and
          developing a fullstack web application for my friends in institute. I
          really like web development and I want to further develop in this
          direction, and in the future expanding my skills in backend
          development.
        </p>
        <InsrtumentList />
      </div>
    </div>
  </div>
);

const InsrtumentList = () => (
  <React.Fragment>
    <h5 className="subtitle">Programming languages and platforms:</h5>
    <ul>
      <li>
        <i className="fab fa-html5" />
        HTML 5
      </li>
      <li>
        <i className="fab fa-css3-alt" />
        CSS 3
      </li>
      <li>
        <i className="fab fa-js-square" />
        Javascript
      </li>
      <li>
        <i className="fab fa-python" />
        Python
      </li>
      <li>
        <i className="fab bash-logo" />
        Bash
      </li>
      <li>
        <i className="fab fa-ubuntu" />
        Linux
      </li>
    </ul>
    <h5 className="subtitle">Worked with:</h5>
    <ul>
      <li>
        <i className="fab fa-react" />
        React
      </li>
      <li>
        <i className="fab jquery-logo" />
        JQuery
      </li>
      <li>
        <i className="fab fa-sass" />
        Sass
      </li>
      <li>
        <i className="fab django-logo" />
        Django
      </li>
      <li>django-rest-framework</li>
      <li>
        <i className="fab bootstrap-logo" />
        Bootstrap 4+
      </li>
      <li>
        <i className="fab materialize-logo" />
        Materialize
      </li>
      <li>
        <i className="fab axios-logo" />
        Axios
      </li>
      <li>
        <i className="fab fa-gulp" />
        Gulp
      </li>
    </ul>
    <h5 className="subtitle">Another:</h5>
    <ul>
      <li>Flexbox</li>
      <li>Grid CSS Layout</li>
      <li>BEM</li>
      <li>ES6</li>
    </ul>
  </React.Fragment>
);

export default About;
