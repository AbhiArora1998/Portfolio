
import logo from "../assets/images/logo.png"
function Header(props) {


    return <div className="navigationHeader">
        <div className="navigationTitle">
            <div className="navigationOuterBorder logoAnimationMain">
                <img src={logo} alt="" />
            </div>
        </div>
        <div className="navigationAreas">
            
            <a href="#footerScrool" className="navigatoinLinks btn-grad">
                contact
            </a>
            <a href="#projectsScroll" className="navigatoinLinks btn-grad">
                projects
            </a>
            <a href="#expreienceScroll" className="navigatoinLinks btn-grad">
                experience
            </a>
        </div>
    </div>


}

export default Header;