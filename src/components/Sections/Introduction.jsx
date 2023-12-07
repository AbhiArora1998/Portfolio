import React, { useState, useEffect } from "react";





function Introduction() {
    // Angle deg

    const [angleDeg, angleChangeDetected] = useState(0)
    const eyeDegRotation = {
        transform: `rotate(${90 + angleDeg}deg)`
    }

    const [greetingsLanguage, greetingschanged] = useState("Hello")


    useEffect(() => {
        const interval = setInterval(() => {
            // Perform actions here that should occur every 5 seconds
            greetingschanged(prevVal => {
                if (prevVal === "Hello") {
                    return "Namaste"
                } else if (prevVal === "Namaste") {
                    return "Hola"
                } else if(prevVal === "Hola"){
                    return "Nǐ hǎo"
                }
                return "Hello"
            });
        }, 3000);
        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array to run only once on mount



    function getCoordinates(event) {

        const anchor = document.getElementById("anchor");
        const rekt = anchor.getBoundingClientRect();
        const anchorx = rekt.left + rekt.width / 2;
        const anchory = rekt.top + rekt.height / 2
        const angleDeg = calcAngle(event.clientX, event.clientY, anchorx, anchory)
        console.log(angleDeg)
        angleChangeDetected(angleDeg);
    }

    function calcAngle(cx, cy, ex, ey) {
        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy, dx);
        const deg = rad * 180 / Math.PI;
        return deg;
    }
    // Angle deg

    return <div className="intro" onMouseMove={getCoordinates}>
        <div className="side-by-side">
            <div className="InfoDetails infoCard">
                
                    <h1  className="greetingsTitle">
                        {greetingsLanguage}
                    </h1>
                    <h1 className="greetingsTitle" >
                        I'm Abhishek Arora
                    </h1>
                    <h2 style={{fontWeight:"300"}}>
                        Startup co-founder, full stack developer and a aws practioner 
                    </h2>
                
            </div>
        </div>
        <div className="side-by-side full-row">
            <div className="manContainer" >
                <img id="anchor" src={require('../../assets/images/Man.png')} alt="" />
                <div >
                    <img style={eyeDegRotation} className="eye1 eye" src={require('../../assets/images/eyeOne.png')} height="30px" width="13px" alt="" />
                    <img style={eyeDegRotation} className="eye2 eye" src={require('../../assets/images/eyeOne.png')} height="30px" width="13px" alt="" />
                </div>
            </div>
        </div>
    </div>
}

export default Introduction