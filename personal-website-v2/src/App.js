import './App.css';
import AboutMe from './components/AboutMe';
import Button from './components/Button';
import Header from './components/Header';
import Navbar from './components/Navbar';
import TagCont from './components/TagCont';
import Skills from './sub-components/Skills';

import { ClickedProvider } from './context/ClickedContext';
import { RainProvider } from './context/RainContext';
import { TagProvider } from './context/TagContext';

function App() {
  return (
    <ClickedProvider>
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
                text = "let's play tag!" function = "tag"/>
              <Button
                text = "click me!"/>
            </div>
            <TagCont/>

            <div id = "skill-section">
              <div className = "skill-name">
                <h2>Web Development</h2>
                <div className = "skills-cont">
                  <Skills skill = "ReactJS"/>
                  <Skills skill = "React-Native"/>
                  <Skills skill = "HTML"/>
                  <Skills skill = "CSS"/>
                  <Skills skill = "NodeJS"/>
                  <Skills skill = "Express"/>
                  <Skills skill = "PostgreSQL"/>
                  <Skills skill = "MongoDB"/>
                  <Skills skill = "Flask"/>
                </div>
              </div>
              <div className = "skill-name">
                <h2>DevOps</h2>
                <div className = "skills-cont">
                  <Skills skill = "Docker"/>
                  <Skills skill = "Kubernetes"/>
                  <Skills skill = "GitHub"/>
                  <Skills skill = "Amazon Web Services"/>
                  <Skills skill = "Google Cloud"/>
                </div>
              </div>
              <div className = "skill-name">
                <h2>Coding Profficiencies</h2>
                <div className = "skills-cont">
                  <Skills skill = "Java"/>
                  <Skills skill = "Python"/>
                  <Skills skill = "JavaScript"/>
                  <Skills skill = "Assembly"/>
                  <Skills skill = "Pytorch"/>
                </div>
              </div>
            </div>
          </div>
        </RainProvider>
      </TagProvider>
    </ClickedProvider>
  );
}

export default App;
