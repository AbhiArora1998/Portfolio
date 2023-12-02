import React, { useState } from "react";
import ToolCards from "./toolCards";

function CardDetails( props) {
    const data = props.data.content
    const [isVisible, getVisibility] = useState(false)
    const blurdiv ={
        filter:'blur(10px)',
        
        
    }
    return <div className="cardDetails" onMouseEnter={() => getVisibility(true)}
        onMouseLeave={() => getVisibility(false)} >

            {isVisible && <div className="cardHover">
                        <div className="toolCards">
                            <ToolCards skills={props.data.skills} icons={props.data.icons}></ToolCards>
                        </div>
                    </div>}


        <div style={!isVisible? null: blurdiv} className="cardNoHover">
            <h1 className="cardTile"> {props.data.title}</h1>
            <h2 className="cardSubHeading">{props.data.location}</h2>
            <ul >
            {data !==undefined && data.map((content, index)=>{
                    return <li key={index}>{content}</li>
                })}
            </ul>
        </div>


        

    </div>
}

export default CardDetails