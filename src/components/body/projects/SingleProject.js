import React from "react";
import "./projects.css";
function SingleProject({
  header,
  github,
  demo,
  summary,
  buildwith,
  imgsource,
}) {
  return (
    <div className="project">
      <div className="project_details">
        <div className="project_title">{header}</div>
        <div className="project_demo_code">
          {demo ? (
            <a href={demo} target="_blank">
              <i class="fab fa-github-square"></i>demo
            </a>
          ) : null}

          <a href={github} target="_blank">
            <i class="fab fa-github-square"></i>github
          </a>
        </div>
        <div className="project_summary">
          <p>{summary}</p>
        </div>
        <div className="project_tech">
          {buildwith.map((item) => {
            return <span>{item}</span>;
          })}
        </div>
      </div>
      <div className="project_image">
        <img src={imgsource} alt="project description" />
      </div>
    </div>
  );
}

export default SingleProject;
