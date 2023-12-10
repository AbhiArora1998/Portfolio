import React from "react";
import back from "./assets/images/herobg.png"
function Background() {
    return <div className="grandientWrapper">
        {/* <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
         */}

         <div className="randomGradient1">
           <img className="backGroundIMg" src={back} alt="" />
         </div>
    </div>
}

export default Background;