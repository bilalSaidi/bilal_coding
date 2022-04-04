import React from "react";
import SingleProject from "./SingleProject";
import "./projects.css";
import EComerceApiScreen from "../../../assets/projects/ecommerce_api/main.png";
import AgencyWebsiteScreen from "../../../assets/projects/agency_website/agency_website.png";
import PortfolioScreen from "../../../assets/projects/personal_portfolio/personal.png";
const Projects = () => {
  return (
    <div className="projects">
      <div className="main_header">projects</div>
      <div className="list_projects">
        <SingleProject
          header="Ecommerce Api"
          github="https://github.com/bilalSaidi/ecommerce_api"
          summary=" Creating An Api For Ecommerce Website Using Nodejs [Express
            Framework] And MongoDb Also
            This Api Was Tested using postman to make sure he is Working
            Correctly , The Api Conatin Authentication Part With JWT, User ,
            Order , Cart And Product , for more details visit the github link
            it's an open source project."
          buildwith={["NodeJs", "ExpressJs", "Mongoose", "Postman"]}
          imgsource={EComerceApiScreen}
        />
        <SingleProject
          header="Protfolio Reactjs Website"
          github="https://github.com/bilalSaidi/bilal_coding"
          demo="https://bilalcoding.netlify.app/"
          summary="i build this react protfolio to a online representation of my work "
          buildwith={[
            "html 5",
            "css 3",
            "netlify dypeloyment",
            "responsive design",
            "reactjs",
            "hook[useState]",
          ]}
          imgsource={PortfolioScreen}
        />
        <SingleProject
          header="Agency Website"
          github="https://github.com/bilalSaidi/compaywebsite"
          demo="https://companytemplete.netlify.app/"
          summary="this website is perfect for any small company want to move
                online ,the templete contain[about,portfolio,services,price,team,blog,contact]. 
                those section are the main section for any company to present
                their content."
          buildwith={[
            "html 5",
            "css 3",
            "netlify dypeloyment",
            "responsive design",
            "java script",
            "bootstrap",
          ]}
          imgsource={AgencyWebsiteScreen}
        />
      </div>
    </div>
  );
};

export default Projects;
