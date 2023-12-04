import React from "react";
import angular from "../../../assets/images/angular.png"
 

function ProjectsAbout() {
    return <div className="aboutInfoProjects">
        <h1>About</h1>
        <div>
            <h2 style={{padding:"5%"}}>This website was created to help people explore the area around and make decisive decision on the basis of weather in that area.</h2>
            <h2 style={{padding:"5%"}}>This project informs the user about the weather for the entire day on the hourly basis. Furthermore, it also provides a brief detail about the attractions near by.</h2>
        </div>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <div className="borderRadius">
                <img src={angular} alt="" />
            </div>
            <div className="borderRadius">
                <img src={angular} alt="" />
            </div>
        </div>
    </div>
}
export default ProjectsAbout;