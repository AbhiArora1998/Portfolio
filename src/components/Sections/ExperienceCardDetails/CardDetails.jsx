import React, { useState } from "react";
import ToolCards from "./toolCards";

function CardDetails() {

    const [isVisible, getVisibility] = useState(false)
    const blurdiv ={
        filter:'blur(10px)',
        
        
    }
    return <div className="cardDetails" onMouseEnter={() => getVisibility(true)}
        onMouseLeave={() => getVisibility(false)} >

            {isVisible && <div className="cardHover">
                        <div className="toolCards">
                            <ToolCards></ToolCards>
                        </div>
                    </div>}


        <div style={!isVisible? null: blurdiv} className="cardNoHover">
            <h1 className="cardTile"> Research Skilled Development Trainee</h1>
            <h2 className="cardSubHeading">Bussiness Intellegence Research Group, UNBC</h2>
            <ul >
                <li>
                    Built Single Page Applications for clients using Angular and primeNg package, utilizing expertise in MVC architecture, data binding, and UI component integration.
                </li>
                <li>
                    Crafted and executed a streamlined MS SQL database solution, resulting in a 30% reduction in data redundancy and a noticeable improvement in data retrieval efficiency.
                </li>
                <li>
                    Developed and maintained a new RESTful API for integrating the client's website using .Net 6, improving data transfer and scalability.
                </li>
                <li>
                    Strengthened API security by implementing Amazon Web Services (AWS) IAM for access control and AWS Lambda for real-time threat monitoring and response, resulting in a significant improvement in security risks and unauthorized access.
                </li>

                <li>
                    Utilized AWS S3 integration within .NET 6 framework to optimize image storage and retrieval. Leveraged cloud- based infrastructure to enhance application performance by efficiently managing image assets.
                </li>

                <li>
                    Collaborated closely with cross-functional team members on GitLab to streamline upcoming changes, successfully delivering new features and resolving bugs. Contributed to a 20% reduction in bug-related customer support inquiries by implementing targeted fixes and enhancements.
                </li>
            </ul>
        </div>


        

    </div>
}

export default CardDetails