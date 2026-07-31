import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="main_header">key achievements</div>
      <div className="list_projects">
        <div className="project">
          <h3>Owned end-to-end QA lifecycle</h3>
          <p>
            Served as the sole QA Engineer for the platform migration, taking full ownership
            of test planning, strategy, test case design, execution, regression testing,
            defect management, and release validation across development, staging, and production.
          </p>
        </div>
        <div className="project">
          <h3>Built scalable automation frameworks</h3>
          <p>
            Created and maintained Playwright and Cypress automation frameworks that reduced
            manual testing effort by approximately 7,000 hours annually and strengthened release confidence.
          </p>
        </div>
        <div className="project">
          <h3>Delivered measurable quality impact</h3>
          <p>
            Detected and reported 1,500+ critical defects before production release and
            developed 1,000+ automated API tests to improve product reliability and quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
