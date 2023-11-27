import React from "react";

function ToolCards(props) {
    const data = props.skills
    console.log(data)
    return <div   >
        <h1 className="title">
            Skills
        </h1>
        <div className="cardSkillContainer">
            {data !== undefined && data.map((skill, index) => {
                return <div key={index} className="toolCardsBox">
                    <h1>{skill}</h1>
                </div>
            })}
        </div>


    </div>
}

export default ToolCards