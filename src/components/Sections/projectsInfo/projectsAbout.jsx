import React from "react";
import git from "../../../assets/images/git.png"
import live from "../../../assets/images/live.png"



function ProjectsAbout(props) {
    return <div className="aboutInfoProjects">
        <h1>{props.data.projectName}</h1>
        <div>
            {props.data.projectAbout.map((value, index) => {
                return <h3 key={index} style={{ padding: "2%" }}>{value}</h3>
            })}

        </div>
        <h2>Tools</h2>
        <div className="projectToolsContainer">
            {props.data.projectTools.map((value,index) => {
                return <div className="flexStyleforProjectTools" key={index} >
                    <h4>{value}</h4>
                </div>
            })}
        </div>
        <div className="linksProjects">
            <a href={props.data.projectLinks[0]} target="_blank"><img src={git} height="50px" style={{cursor:"pointer"}} alt="" /></a>
            <a href={props.data.projectLinks[1]} target="_blank"><img src={live} height="50px" style={{cursor:"pointer"}} alt="" /></a>
        </div>
    </div>
}
export default ProjectsAbout;