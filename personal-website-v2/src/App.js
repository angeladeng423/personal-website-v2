import './App.css';
import AboutMe from './components/AboutMe';
import Button from './components/Button';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Tag from './components/Tag';
import { RainProvider } from './context/RainContext';
import { TagProvider } from './context/TagContext';

function App() {
  return (
    <TagProvider>
      <RainProvider>
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
          <Tag/>
        </div>
      </RainProvider>
    </TagProvider>
  );
}

export default App;
