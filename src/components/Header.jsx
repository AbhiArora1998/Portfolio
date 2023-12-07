
import logo from "../assets/images/logo.png"
function Header(props) {

   
    return <header className="App-header">
        <div className="navigationHeader">
            <div className="navigationTitle">
                <div className="navigationOuterBorder logoAnimation">
                    
                <img src={logo} alt="" />
                    
                </div>
            </div>
            <div className="navigationAreas">
                <div className="navigatoinLinks">
                   
                </div>
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
    </header>
}

export default Header;