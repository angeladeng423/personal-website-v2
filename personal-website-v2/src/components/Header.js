import { useContext, useState } from 'react';
import '../components-css/Header.css';
import { RainContext } from '../context/RainContext';
import dots from '../images/dots.png';
import me2 from "../images/me2png.png";
import me from '../images/mepng.png';
import outline from '../images/outline.png';
import Line from '../sub-components/Line';
import Rain from '../sub-components/Rain';

function Header(){
    const [currentImg, setCurrentImg] = useState(me)
    const { rain } = useContext(RainContext)

    function checkImg(img){
        if(img === me){
            setCurrentImg(me2)
        } else{
            setCurrentImg(me)
        }
    }

    const numberOfRainComponents = Math.floor(Math.random() * (40 - 15 + 1) + 15);

    const rainComponents = Array.from({ length: numberOfRainComponents }, (_, index) => {
        const num = Math.floor(Math.random() * 10);
      
        return <Rain key={index} id={rain} num={num} />;
    });

    return(
        <div id = "header-bck">
            {rainComponents}

            <div className = "circle" id = "one"></div>
            <div className = "circle" id = "two"></div>
            <div className = "circle" id = "three"></div>
            <div className = "circle" id = "four">
                <div id = "orbiting"></div>
            </div>

            <div className = "arc"></div>
            <p className = "header-text">ANGELA DENG</p>
            <p className = "header-text" id = "header-text-bck">ANGELA DENG</p>
            <img src = {currentImg} id = "portrait" onClick = {() => {checkImg(currentImg)}}></img>
            <img src = {dots} id = "portrait-bck"></img>
            <img src = {outline} id = "outline"></img>
            
            <Line lineType = "vl" height = "50vh" left = "85vw" id = "v1"/>
            <Line lineType = "vl" height = "40vh" left = "70vw" top = "15vh" id = "v2"/>
            <Line lineType = "vl" height = "27vh" left = "55vw" top = "28vh" id = "v3"/>
            <Line lineType = "hl" width = "50vw" top = "25vh" left = "65vw" id = "h1"/>
            <Line lineType = "hl" width = "75vw" top = "40vh" left = "45vw" id = "h2"/>
            <Line lineType = "hl" width = "60vw" top = "10vh" left = "55vw" id = "h3"/>
        
            <Line lineType = "vl" height = "50vh" left = "63vw" id = "v4"/>
            <Line lineType = "vl" height = "40vh" left = "78vw" id = "v5"/>
            <Line lineType = "vl" height = "27vh" left = "96vw" id = "v6"/>
            <Line lineType = "hl" width = "50vw" top = "30vh" left = "45vw" id = "h4"/>
            <Line lineType = "hl" width = "75vw" top = "50vh" left = "40vw" id = "h5"/>
            <Line lineType = "hl" width = "60vw" top = "20vh" left = "45vw" id = "h6"/>
        </div>
    )
}

export default Header;