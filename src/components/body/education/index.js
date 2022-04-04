import React from "react";
import "./education.css";
const Education = () => {
  return (
    <div className="education">
      <div className="main_header">education</div>
      <div className="education_timeline">
        <div className="master_degree">
          <span className="name_course">
            Mestrado em Engenharia Informática.
          </span>

          <p>
            <span className="duration_course">january 2022- present | </span>
            University of Trás-os-Montes and Alto Douro
          </p>
        </div>
        <div className="master_degree">
          <span className="name_course">
            master's degree in computer science engineering.
          </span>

          <p>
            <span className="duration_course">
              september 2016- july 2021 |{" "}
            </span>
            university of batna 2 , batna , algeria
          </p>
        </div>
        <div className="erasmus_piraues">
          <span className="name_course">
            erasmus + scolarship master's semester
          </span>
          <p>
            <span className="duration_course">february 2020- july 2020 | </span>
            university of piraues , athens , greece
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
