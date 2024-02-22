import { useState } from 'react';
import useMousePosition from '../useMousePosition';
import './Disc.css';

function Disc(props){
    const [mouseClick, setMouseClick] = useState(false)

    const mousePosition = useMousePosition()
    
    function moveDisc(){
        console.log(mousePosition)
    }
    
    return(
        <div onMouseEnter = {moveDisc}>
            <div id = {props.diskType}>
                <div id = "inner">
                    <div id = "inner-inner"></div>
                </div>
            </div>
        </div>
    )
}

export default Disc;