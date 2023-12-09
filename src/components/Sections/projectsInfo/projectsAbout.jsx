import React from "react";
import angular from "../../../assets/images/angular.png"


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
        {/* <div style={{ display: "flex", justifyContent: "flex-start",flexWrap:"wrap", }}>
            {props.data.projectTools.map((value,index) => {
                return <div style={{textAlign:"center"}} key={index} className="borderRadius">
                    <h4>{value}</h4>
                </div>
            })}
        </div> */}
    </div>
}
export default ProjectsAbout;