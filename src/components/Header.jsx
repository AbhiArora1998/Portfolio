import React from "react";

function Header() {
    return <header className="App-header">
        <div className="navigationHeader">
            <div className="navigationTitle">
                <h1>Navigation</h1>
            </div>
            <div className="navigationAreas">
                <div className="navigatoinLinks">
                    about
                </div>
                <div className="navigatoinLinks">
                    contact
                </div>
                <div className="navigatoinLinks">
                    projects
                </div>
                <div className="navigatoinLinks">
                    experience
                </div>
            </div>
        </div>
    </header>
}

export default Header;