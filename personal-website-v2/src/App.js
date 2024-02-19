import './App.css';
import AboutMe from './components/AboutMe';
import Button from './components/Button';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutMe/>
      <div id = "button-cont">
        <Button
          text = "make it rain!" function = "rain"/>
        <Button
          text = "let's play tag!"/>
        <Button
          text = "click me!"/>
      </div>
    </div>
  );
}

export default App;
