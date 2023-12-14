import React, { useState, useEffect, useRef } from "react";
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import BodySection from './components/BodySection'
import Background from './Background';
import logo from "./assets/images/logo.png"
function App() {




  const loader5Ref = useRef(null)

  const [isLoading, changeLoading] = useState(true);



  useEffect(() => {
    changeLoading(true)
    const intervalId = setInterval(() => {
      changeLoading(false)
    }, 2500); // Interval set to 1000 milliseconds (1 second)

    if (loader5Ref.current && isLoading==true) {
      loader5Ref.current.classList.add("logoAnimation");
    }
    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
    
  }, []);
  


  return (
    <div className="App">
      hello
      {isLoading && <div ref={loader5Ref} id="loader" className="navigationOuterBorder  mainLoader">
        <img src={logo} alt="" />
      </div>}

      <div className='backGroundStyle'>
        <Background></Background>
      </div>
      
      {!isLoading && <div>
        <div className='content'>
          <Header data={isLoading}></Header>

          <BodySection></BodySection>

          <div id="footerScrool" className='footerStyle'>
            <Footer></Footer>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <p>
            @ 2023 Abhishek
          </p>
        </div>
      </div>}

    </div>
  );
}

export default App;
