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
            <span className="blue_text">Testing:</span>
            [Manual Testing, Regression Testing, Smoke Testing, Sanity Testing, End-to-End Testing, Exploratory Testing], <br />
            <span className="blue_text">Automation:</span>
            [Playwright, Cypress], <br />
            <span className="blue_text">Languages:</span>
            [JavaScript, TypeScript, SQL], <br />
            <span className="blue_text">API & tools:</span>
            [REST API, Postman, Azure DevOps, Jira, Confluence, Allure Reports, Git], <br />
          </div>
          <div className="in_depth">
            <span className="blue_text">Core focus:</span>
            <span>&#123;</span>
            <br />
            <span className="blue_text">Experienced in:</span> [Test planning, test case design, defect management, release validation, CI/CD],
            <br />
            <span className="blue_text">AI-assisted workflows:</span> [GitHub Copilot, GitHub Copilot Chat/Agent, Atlassian Rovo],
            <br />
            <span className="blue_text">Methodologies:</span> [Agile, Scrum, CI/CD],
            <br />
            <span>&#125;</span>, <br />
            <span className="blue_text">Languages:</span> "Arabic (Native), English (Advanced)",
          </div>
          <br /> <span>&#125;</span>;
        </p>
      </div>
    </div>
  );
};

export default Skills;
