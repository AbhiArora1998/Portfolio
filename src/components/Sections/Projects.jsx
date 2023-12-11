import React, { useRef, useState } from "react";
import ProjectsAbout from "./projectsInfo/projectsAbout"
import exploro from "../../assets/images/exploro.png"
import tindog from "../../assets/images/tindog.png"
import shoppingList from "../../assets/images/recipe.png"
import todo from "../../assets/images/todo.png"
import projectData from "./projectsInfo/projectsData";
function Project() {

    const paper1Ref = useRef(null);
    const paper2Ref = useRef(null);
    const paper3Ref = useRef(null);
    const paper4Ref = useRef(null)
    const paper5Ref = useRef(null)

    const book = useRef(null);
    const nextBtn = useRef(null);
    const prevBtn = useRef(null);


    const [currentLocation, setCurrentLocation] = useState(2);
    let numOfPapers = 4;
    let maxLocation = numOfPapers + 1
    function openbook() {
        if (book.current) {
            book.current.style.transform = "translateX(50%)"
        }
        if (prevBtn.current && nextBtn.current) {
            nextBtn.current.style.transform = "translateX(30%)"
            prevBtn.current.style.transform = "translateX(-10%)"

        }
    }

    function closebook() {

    }
    function goNextpage() {

        if (currentLocation < maxLocation && paper1Ref.current) {

            setCurrentLocation((prevLocation) => {
                console.log(prevLocation, "nextButton")

                switch (currentLocation) {
                    case 1:
                        // openbook();
                        // paper1Ref.current.classList.add("flipped");

                        break;
                    case 2:
                        paper1Ref.current.style.zIndex = 3
                        paper2Ref.current.classList.add("flipped");
                        paper2Ref.current.style.zIndex = 4

                        break;

                    case 3:
                        paper3Ref.current.classList.add("flipped");
                        paper3Ref.current.style.zIndex = 5

                        break;
                    case 4:
                        paper4Ref.current.classList.add("flipped");
                        paper4Ref.current.style.zIndex = 6

                        closebook();
                        break;
                    case 5:
                        paper5Ref.current.classList.add("flipped");
                        paper5Ref.current.style.zIndex = 7

                        closebook();
                        break;
                    default:
                        throw new Error("unkown state")
                }

                return prevLocation + 1
            });
        }
    }
    function goprevPage() {
        setCurrentLocation((prevLocation) => {
            if ((prevLocation) > 1 && paper1Ref.current) {
                console.log((prevLocation), "backButton")


                switch (prevLocation) {
                    case 1:


                        break;
                    case 2:


                        break;

                    case 3:
                        paper2Ref.current.classList.remove("flipped");
                        paper2Ref.current.style.zIndex = 6



                        break;
                    case 4:
                        paper3Ref.current.classList.remove("flipped");
                        paper3Ref.current.style.zIndex = 5


                        break;
                    case 5:

                        paper4Ref.current.classList.remove("flipped");
                        paper4Ref.current.style.zIndex = 4

                        closebook();
                        break;
                    default:
                        throw new Error("unkown state")
                }

            }
            if (prevLocation < 3) {
                return prevLocation
            }

            return prevLocation - 1
        });



    }


    return <div id="projectsScroll" style={{ minHeight: "100vh" }}>
        <h1 className="title">
            Projects
        </h1>
        <div className="projectContainer">

            <div ref={book} id="book" className="book">
                {/* paper 1 */}
                <div ref={paper1Ref} id="p1" className="paper flipped ">

                    <div className="back">
                        <div id="b1" className="back-content">
                            <img src={projectData[0].projectImg} alt="" />
                           
                        </div>
                        
                    </div>
                </div>
                {/* paper 2 */}
                <div ref={paper2Ref} id="p2" className="paper">
                    <div className="front">
                        <div id="f2" className="front-content">
                            <ProjectsAbout data={projectData[0]}></ProjectsAbout>
                        </div>
                    </div>
                    <div className="back">
                        <div id="b2" className="back-content">
                            <img src={projectData[1].projectImg} alt="" />
                            
                        </div>
                    </div>
                </div>
                {/* paper 3 */}
                <div ref={paper3Ref} id="p3" className="paper">
                    <div className="front">
                        <div id="f3" className="front-content">
                            <ProjectsAbout data={projectData[1]}></ProjectsAbout>

                        </div>
                    </div>
                    <div className="back">
                        <div id="b3" className="back-content">
                            <img src={projectData[2].projectImg} alt="" />

                        </div>
                    </div>
                </div>
                {/* paper 4 */}
                <div ref={paper4Ref} id="p4" className="paper">
                    <div className="front">
                        <div id="f4" className="front-content">
                            <ProjectsAbout data={projectData[2]}></ProjectsAbout>

                        </div>
                    </div>
                    <div className="back">
                        <div id="b4" className="back-content">
                            <img src={projectData[3].projectImg} alt="" />

                        </div>
                    </div>
                </div>
                {/* paper 5 */}
                <div ref={paper5Ref} id="p5" className="paper">
                    <div className="front">
                        <div id="f5" className="front-content">
                            <ProjectsAbout data={projectData[3]}></ProjectsAbout>

                        </div>
                    </div>

                </div>



            </div>

        </div>
        <button ref={prevBtn} onClick={goprevPage} id="prev-btn">
            <i className="fas fa-arrow-circle-left"></i>

        </button>
        <button ref={nextBtn} onClick={goNextpage} id="next-btn">
            <i className="fas fa-arrow-circle-right"></i>
        </button>
    </div>
}

export default Project;