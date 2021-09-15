import React from "react";
import "./hero.css";
const AboutMe = () => {
  return (
    <div className="hero">
      <div className="hero_top">
        <div className="about_me">
          <p className="about_me_summary">
            hello there 👋, i am <br />{" "}
            <span className="personal_name">bilal saidi</span> <br />i am a
            passionate <span>web developer</span> with a strong technical skills{" "}
            <br /> i work with <span>java script</span> and i want to grow in
            this direction.
          </p>
        </div>
        <div className="personal_photo">
          <img
            src={require("../../../assets/hero/peronal_photo.jpg").default}
            alt="bilal saidi web developer"
          />
        </div>
      </div>
      <div className="hero_bottom">
        <div className="social_link">
          <a
            href="https://www.linkedin.com/in/bilal-saidi-19a31a177/"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="social_link">
          <a href="https://github.com/bilalSaidi" target="_blank">
            <i class="fab fa-github-square"></i>
          </a>
        </div>
        <div className="social_link">
          <a
            href="https://www.facebook.com/bilal.saidi.12914216"
            target="_blank"
          >
            <i class="fab fa-facebook-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
