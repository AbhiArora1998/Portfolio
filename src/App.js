
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import BodySection from './components/BodySection'
import Background from './Background';
function App() {
  return (
    <div className="App">
      {/* <div className='wrapper'>
       <Background></Background>
      </div> */}
      <div className='backGroundStyle'>
        <Background></Background>
      </div>
      <div className='content'>
        <Header></Header>
        <BodySection></BodySection>
        <div className='footerStyle'>
          <Footer></Footer>
        </div>
      </div>
      <div style={{textAlign:"center"}}>
            <p>
                @ 2023 Abhishek
            </p>
        </div>

    </div>
  );
}

export default App;
