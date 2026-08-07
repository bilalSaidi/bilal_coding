import React from "react";
import "./hero.css";
const AboutMe = () => {
  return (
    <div className="hero">
      <div className="hero_top">
        <div className="about_me">
          <p className="about_me_summary">
            Hello there 👋, I’m <br />{" "}
            <span className="personal_name">Bilal Saidi</span> <br /> I’m a
            <span> Software Quality Assurance Engineer </span> delivering high-quality software
            applications through manual and automated testing. I focus on
            <span> test strategy </span>, <span> automation </span>, and
            <span> release quality </span> across various platforms.
          </p>
        </div>
        <div className="personal_photo">
          <img
            src={require("../../../assets/hero/peronal_photo.jpeg").default}
            alt="Bilal Saidi web developer"
          />
        </div>
      </div>
      <div className="hero_bottom">
        <div className="social_link">
          <a
            href="https://www.linkedin.com/in/bilal-saidi-19a31a177/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="social_link">
          <a href="https://github.com/bilalSaidi" target="_blank" rel="noreferrer">
            <i className="fab fa-github-square"></i>
          </a>
        </div>
        <div className="social_link">
          <a
            href="https://www.facebook.com/bilal.saidi.12914216"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
