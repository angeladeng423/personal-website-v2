import React, { useState } from 'react';
import "./Toggle.css";

function Toggle(props) {
    const [playMusic, setPlayMusic] = useState("unclicked")

    function handleMusic(){
        if(playMusic === "unclicked"){
            setPlayMusic("clicked")
             props.handleMusic()
        } else{
            setPlayMusic("unclicked")
            props.stopMusic()
        }
    }

    return (
        <div className = {playMusic} onClick={handleMusic}>
            <img id = "icon" src = {props.icon}></img>
        </div>
    );
}

export default Toggle