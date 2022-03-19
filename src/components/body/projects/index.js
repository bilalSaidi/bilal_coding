import React from "react";
import "./projects.css";
const Projects = () => {
  return (
    <div className="projects">
      <div className="main_header">projects</div>
      <div className="list_projects">
        {/*  Start Project  */}
        <div className="project">
          <div className="project_details">
            <div className="project_title">Ecommerce Api</div>
            <div className="project_demo_code">
              <a
                href="https://github.com/bilalSaidi/ecommerce_api"
                target="_blank"
              >
                <i class="fab fa-github-square"></i>github
              </a>
            </div>
            <div className="project_summary">
              <p>
                Creating An Api For Ecommerce Website Using Nodejs [Express
                Framework] And MongoDb Also <br />
                This Api Was Tested using postman to make sure he is Working
                Correctly , The Api Conatin Authentication Part With JWT, User ,
                Order , Cart And Product , for more details visit the github
                link it's an open source project.
              </p>
            </div>
            <div className="project_tech">
              <span>NodeJs</span>
              <span>ExpressJs</span>
              <span>Mongoose</span>
              <span>Postman</span>
            </div>
          </div>
          <div className="project_image">
            <img
              src={
                require("../../../assets/projects/agency_website/agency_website.png")
                  .default
              }
              alt="to list react app"
            />
          </div>
        </div>
        {/*  End Project  */}
        {/*  Start Project  */}
        <div className="project">
          <div className="project_details">
            <div className="project_title">to do list app</div>
            <div className="project_demo_code">
              <a href="https://crudappreact.netlify.app/" target="_blank">
                <i class="fab fa-chrome"></i>demo
              </a>
              <a
                href="https://github.com/bilalSaidi/crudappReact"
                target="_blank"
              >
                <i class="fab fa-github-square"></i>github
              </a>
            </div>
            <div className="project_summary">
              <p>
                with this to do list app the user can add his daily activity to
                organize his day , also he can update any activity he want or
                even delete it . there option where the user can clear the list
                after he do all the activity .
              </p>
            </div>
            <div className="project_tech">
              <span>react</span>
              <span>bootstrap</span>
              <span>netlify dypeloyment</span>
              <span>responsive design</span>
            </div>
          </div>
          <div className="project_image">
            <img
              src={
                require("../../../assets/projects/to_do_list/to_do_app.png")
                  .default
              }
              alt="to list react app"
            />
          </div>
        </div>
        {/*  End Project  */}
        {/*  Start Project  */}
        <div className="project">
          <div className="project_details">
            <div className="project_title">Agency Website</div>
            <div className="project_demo_code">
              <a href="https://companytemplete.netlify.app/" target="_blank">
                <i class="fab fa-chrome"></i>demo
              </a>
              <a
                href="https://github.com/bilalSaidi/compaywebsite"
                target="_blank"
              >
                <i class="fab fa-github-square"></i>github
              </a>
            </div>
            <div className="project_summary">
              <p>
                this website is perfect for any small company want to move
                online ,<br />
                the templete contain
                [about,portfolio,services,price,team,blog,contact]. <br />
                those section are the main section for any company to present
                their content.
              </p>
            </div>
            <div className="project_tech">
              <span>html 5</span>
              <span>css 3</span>
              <span>netlify dypeloyment</span>
              <span>responsive design</span>
              <span>java script</span>
              <span>bootstrap</span>
            </div>
          </div>
          <div className="project_image">
            <img
              src={
                require("../../../assets/projects/agency_website/agency_website.png")
                  .default
              }
              alt="to list react app"
            />
          </div>
        </div>
        {/*  End Project  */}
      </div>
    </div>
  );
};

export default Projects;
