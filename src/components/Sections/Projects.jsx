import React, { useRef,useState } from "react";
import exploro from "../../assets/images/exploro.png"

function Project() {

    const paper1Ref = useRef(null);
    const paper2Ref = useRef(null);
    const paper3Ref = useRef(null);
    const book = useRef(null);
    const nextBtn = useRef(null);
    const prevBtn = useRef(null);


    const [currentLocation, setCurrentLocation] = useState(1);
        let numOfPapers = 3;
        let maxLocation = numOfPapers+1
    function openbook(){
            if(book.current){
                book.current.style.transform = "translateX(50%)"
            }
            if(prevBtn.current && nextBtn.current){
                nextBtn.current.style.transform = "translateX(30%)"
                prevBtn.current.style.transform = "translateX(-10%)"

            }
    }

    function closebook(){
        
    }
    function goNextpage(){
        if(currentLocation < maxLocation && paper1Ref.current ){
            switch(currentLocation){
                case 1:
                    openbook();
                    paper1Ref.current.classList.add("flipped");
                    paper1Ref.current.style.zIndex = 3
                    break;
                case 2:
                    paper2Ref.current.classList.add("flipped");
                    paper2Ref.current.style.zIndex = 4

                    break;
                    
                case 3:
                    paper3Ref.current.classList.add("flipped");
                    paper3Ref.current.style.zIndex = 5

                    closebook();
                    break;
                default:
                    throw new Error("unkown state")
            }
            setCurrentLocation((prevLocation)=>{ return prevLocation+1});
        }
    }
    function goprevPage(){
        if(currentLocation > 1 && paper1Ref.current ){
            switch(currentLocation){
                case 1:
                    openbook();
                    paper1Ref.current.classList.remove("flipped");
                    paper1Ref.current.style.zIndex = 5
                    break;
                case 2:
                    paper2Ref.current.classList.remove("flipped");
                    paper2Ref.current.style.zIndex = 4

                    break;
                    
                case 3:
                    paper3Ref.current.classList.remove("flipped");
                    paper3Ref.current.style.zIndex = 3

                    closebook();
                    break;
                default:
                    throw new Error("unkown state")
            }
            setCurrentLocation((prevLocation)=>{ return prevLocation-1});
        }
    }


    return <div style={{ height: "100vh" }}>
        <div className="projectContainer">
            <button ref={prevBtn} onClick={goprevPage} id="prev-btn">
            <i className="fas fa-arrow-circle-left"></i>

            </button>
            <div ref={book} id="book" className="book">
                {/* paper 1 */}
                <div  ref={paper1Ref} id="p1" className="paper ">
                    <div className="front ">
                        <div id="f1" className="front-content">
                            <h1>Project Index</h1>
                        </div>
                    </div>
                    <div className="back">
                        <div id="b1" className="back-content">
                            <img src={exploro} alt="" />
                        </div>
                    </div>
                </div>
                {/* paper 2 */}
                <div ref={paper2Ref} id="p2" className="paper">
                    <div className="front">
                        <div id="f2" className="front-content">
                            <h1>info 1</h1>
                        </div>
                    </div>
                    <div className="back">
                        <div id="b2" className="back-content">
                            <h1>Image 2</h1>
                        </div>
                    </div>
                </div>
                {/* paper 3 */}
                <div ref={paper3Ref} id="p3" className="paper">
                    <div className="front">
                        <div id="f3" className="front-content">
                            <h1>info 2</h1>
                        </div>
                    </div>
                    <div className="back">
                        <div id="b3" className="back-content">
                            <h1>Thank you</h1>
                        </div>
                    </div>
                </div>
                
            </div>
            <button ref={nextBtn} onClick={goNextpage} id="next-btn">
                <i className="fas fa-arrow-circle-right"></i>
            </button>
        </div>
       
    </div>
}

export default Project;