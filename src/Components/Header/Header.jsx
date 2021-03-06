/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Header.scss";

const Header = () => (
  <div className="header">
    <div className="header__darker">
      <div className="header__content">
        <Hello />
        <Socials />
      </div>
    </div>
    <ScrollMouse />
  </div>
);

const Hello = () => (
  <h2 className="home-title">
    <section className="cd-intro">
      <h2 className="cd-headline clip is-full-width font-accident-two-normal uppercase">
        <span className="cd-words-wrapper" style={{ overflow: "hidden" }}>
          <b className="is-visible">
            HELLO I'M <i className="name"> KIRILL VALIRSKIY</i>
          </b>
          <b className="is-hidden">
            I'M <i className="name"> FRONTEND DEVELOPER</i>
          </b>
        </span>
      </h2>
    </section>
  </h2>
);

const Socials = () => (
  <div className="header__socials">
    <a href="https://vk.com/kirizey_melanchol1c" className="fab fa-vk" />
    <a href="https://github.com/Melanchol1c" className="fab fa-github" />
    <a href="https://t.me/kirizey_melanchol1c" className="fab fa-telegram" />
  </div>
);

const ScrollMouse = () => <div className="header__scroll_icon" />;

export default Header;
