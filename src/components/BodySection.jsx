import React from "react";
import Introduction from './Sections/Introduction'
import Experience from "./Sections/Experience";
import Project from "./Sections/Projects"

function BodySection(){
    return <div>
        <Introduction ></Introduction>
        <Experience></Experience>
        <Project></Project>
    </div>
}

export default BodySection