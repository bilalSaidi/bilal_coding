import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div className="main_header">contact</div>
      <div className="contact_detail">
        <div className="contact_social">
          <p>don't hesitate to write your message , i will read it </p>
          <div className="social">
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
        <div className="contact_resume">
          <a href="https://bilalbuildcv.netlify.app/" target="_blank">
            <i class="fas fa-cloud-download-alt"></i> see cv
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
