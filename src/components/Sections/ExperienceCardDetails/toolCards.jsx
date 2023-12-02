import React from "react";


function ToolCards(props) {
    const data = props.skills
    const iconsData = props.icons
    const test = "../../../assets/images/Man.png"
    return <div   >
        <h1 className="title">
            Skills
        </h1>
        <div className="cardSkillContainer">
            {data !== undefined && data.map((skill, index) => {
                return <div key={index} className="toolCardsBox">
                    <div style={{display:"flex" }}>
                        {iconsData !== undefined && <img src={iconsData[index]} className="toolsImage" height="50px" width="20%" alt="hello" />}
                        <h1 style={{paddingLeft:"10%"}}>{skill}</h1>
                    </div>
                </div>
            })}
        </div>


    </div>
}

export default ToolCards