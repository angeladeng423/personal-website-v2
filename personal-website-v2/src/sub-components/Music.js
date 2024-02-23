import React, { useRef, useState } from 'react';
import useSound from 'use-sound';
import Disc from './Disc';
import './Music.css';

import bossMusic from '../audio/bossmusic.mp3';
import nostalgicMusic from '../audio/nostalgic.mp3';
import romanticMusic from '../audio/romantic.mp3';

function Music(){
    const [discPlaying, setDiscPlaying] = useState(false)

    const [ boss ] = useSound(bossMusic, {
        interrupt: true,
    });

    const [ nostalgic ] = useSound(nostalgicMusic, {
        interrupt: true,
    });

    const [ romance ] = useSound(romanticMusic, {
        interrupt: true,
    });

    const greyRef = useRef(null)
    const discOne = useRef(null)
    const discTwo = useRef(null)
    const discThree = useRef(null)

    function checkOverlap(){
        var rect = greyRef.current.getBoundingClientRect();
        var discUn = discOne.current.getBoundingClientRect();
        var discDeux = discTwo.current.getBoundingClientRect();
        var discTrois = discThree.current.getBoundingClientRect();

        if(discPlaying === false && discUn.top < rect.top + 15 && discUn.bottom > rect.bottom - 15){
            if (discUn.left > rect.left - 15 && discUn.right < rect.right + 70){
                alert("one")
                setDiscPlaying(true)
            }
        }

        else if(discPlaying === false && discDeux.top < rect.top + 15 && discDeux.bottom > rect.bottom - 15){
            if (discDeux.left > rect.left - 15 && discDeux.right < rect.right + 70){
                alert("two")
                setDiscPlaying(true)
            }
        }

        else if(discPlaying === false && discTrois.top < rect.top + 15 && discTrois.bottom > rect.bottom - 15){
            if (discTrois.left > rect.left - 15 && discTrois.right < rect.right + 70){
                alert("three")
                setDiscPlaying(true)
            }
        }

        else {
            setDiscPlaying(false)
        }
    }

    return(
        <div id = "cont-two">
            <div id = "cont-one">
                <div id = "record-player">
                    <div id = "grey-mid" ref = {greyRef}>
                        <div id = "mid"></div>
                    </div>
                    <div id = "base" onClick={checkOverlap}>
                        <div id = "stick" onClick={checkOverlap}></div>
                        <div id = "anchor"></div>
                    </div>
                </div>
                <div id = "cat-dance">
                    
                </div>
            </div>
            <div id = "disc-choice">
                <Disc diskType = "disc-one" ref = {discOne}/>
                <Disc diskType = "disc-two" ref = {discTwo}/>
                <Disc diskType = "disc-one" ref = {discThree}/>
            </div>
        </div>
    )
}

export default Music