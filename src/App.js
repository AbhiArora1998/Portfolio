
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import BodySection from './components/BodySection'
import Background from './Background';
function App() {
  return (
    <div className="App">
      <div className='wrapper'>
       <Background></Background>
      </div>
        <Header></Header>
        <BodySection></BodySection>
        <Footer></Footer>
    </div>
  );
}

export default App;
