import React from "react";
import CardDetails from "./ExperienceCardDetails/CardDetails"
import experience from "./experienceObject"

function Experience() {
    return <div className="experienceSection">
        <div className="title">
            <h1 className="scrollAnimate">Experience</h1>
        </div>
        <div className="ExperinceCardsFlexBox">
            <div className="ExperienceCard card1">
                <div className="linearGradient">
                    <CardDetails data={experience[0]}></CardDetails>
                </div>
            </div>
            <div className="ExperienceCard card2">
                <div className="linearGradient">
                    <CardDetails data={experience[1]}></CardDetails>
                </div>
            </div>
        </div>
    </div>
}

export default Experience;