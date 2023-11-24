import React from "react";
import CardDetails from "./ExperienceCardDetails/CardDetails"

function Experience(){
    return <div className="experienceSection">
        <div className="title">
            <h1>Experience</h1>
        </div>
        <div className="ExperinceCardsFlexBox">
            <div className="ExperienceCard card1">
                <CardDetails></CardDetails>
            </div>
            <div className="ExperienceCard card2">
            </div>
        </div>
    </div>
}

export default Experience;