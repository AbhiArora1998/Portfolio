import React from "react";
import CardDetails from "./ExperienceCardDetails/CardDetails"
import experience from "./experienceObject"

function Experience() {
    return <div id="expreienceScroll" className="experienceSection">
        <div className="title">
            <h1 className="scrollAnimate">Experience</h1>
        </div>
        {/* <div className="ExperinceCardsFlexBox">
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
        </div> */}

        <div className="experienceContainer">
            <div className="experienceContiner1">
                <div className="cardContainerExperience">
                    <div className="cardExperience">
                        <h3 className="experienceInfoTitle">
                            Research Skilled Development Trainee
                        </h3>
                        <h4 className="experienceLocation">
                            Bussiness Intelligence Research Group, UNBC
                        </h4>
                        <h4 style={{ textAlign: "center" }}>
                            Tools
                        </h4>
                        <div className="exprienceToolsContainer">
                            {experience[0].skills.map((value, index) => {
                                return <div className="flexStyleforTools">
                                    <h3 className="experienceTools">{value}</h3>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="experienceInfoContainer">
                    <div className="experienceAboutInfoPadding">
                        <h3 className="aboutStartupInfo " >
                            April 2022 - Present
                        </h3>
                        <h3 className="aboutStartupInfo" style={{ margin: "5%" }}>
                            {experience[0].content}
                        </h3>
                    </div>
                </div>
            </div>
            <div className="experienceContiner2">
                <div className="cardContainerExperience">
                    <div className="cardExperience">
                        <h3 className="experienceInfoTitle">
                            Database Administrator Trainee
                        </h3>
                        <h4 className="experienceLocation">
                            Northern HydroMetrological Group,UNBC
                        </h4>
                        <h4 style={{ textAlign: "center" }}>
                            Tools
                        </h4>
                        <div className="exprienceToolsContainer">
                            {experience[1].skills.map((value, index) => {
                                return <div className="flexStyleforTools">
                                    <h3 className="experienceTools">{value}</h3>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="experienceInfoContainer ">
                    <div className="experienceAboutInfoPadding">
                        <h3 className="aboutStartupInfo" style={{ textAlign: "end", padding: "1% 10% 2% 0%" }} >
                            April 2022 - Present
                        </h3>
                        <h3 className="aboutStartupInfo" style={{ margin: "5%" }}>
                            {experience[1].content}
                        </h3>
                    </div>
                </div>

            </div>
        </div>
    </div>
}

export default Experience;