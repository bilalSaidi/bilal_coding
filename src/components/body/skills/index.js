import React from "react";
import "./skills.css";
const Skills = () => {
  return (
    <div className="skills">
      <div className="main_header">skills</div>
      <div className="skills_list">
        <p>
          <span className="const_var">const</span>
          <span className="const_name"> bilal = </span> <span>&#123;</span>
          <br />
          <div className="programin_tech_tools">
            <span className="blue_text">Programming languages : </span>
            [ javascript , nodejs, python ], <br />
            <span className="blue_text">web technologies : </span>
            [ html5 , css3 , react , bootstrap , material ui , git/github ,
            fontawsome , google fonts , flaticon ], <br />
            <span className="blue_text">data base : </span>
            [mysql , mongodb , sql server], <br />
            <span className="blue_text">modeling languages : </span>
            [ uml ],
            <br />
          </div>
          <div className="in_depth">
            <span className="blue_text">in depth : </span>
            <span>&#123;</span>
            <br />
            <span className="blue_text">Experienced in :</span> [ Tensorflow,
            Scikit learn, cloud computing, Machine Learning, computer vision ],
            <br />
            <span className="blue_text"> Passionate about : </span>[
            DataScience, digital markiting, bloger creator ],
            <br />
            <span className="blue_text">more : </span> [Algorithmic and
            pragmatic thinking , +2 years of experience as a front-end web
            developer , Motivated, dedicated , creative ],
            <br />
            <span>&#125;</span>, <br />
            <span className="blue_text">joke : </span> "What did baby cat say to
            her mother? nothing, they can't speak",
          </div>
          <br /> <span>&#125;</span>;
        </p>
      </div>
    </div>
  );
};

export default Skills;
