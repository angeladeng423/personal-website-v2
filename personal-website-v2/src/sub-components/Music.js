import React, { useRef, useState } from 'react';
import useSound from 'use-sound';
import bossMusic from '../audio/bossmusic.mp3';
import nostalgicMusic from '../audio/nostalgic.mp3';
import romanticMusic from '../audio/romantic.mp3';
import volumeImg from '../images/volume.png';
import Disc from './Disc';
import './Music.css';
import Slider from './Slider';
import Toggle from './Toggle';

function Music(){
    const [discPlaying, setDiscPlaying] = useState(false)
    const [sliderValue, setSliderValue] = useState(0.5);

    const [ boss, {sound: bossSound, stop: stopBoss} ] = useSound(bossMusic, {
        interrupt: true,
        volume: sliderValue,
    });

    const [ nostalgic, {sound: nostSound, stop: stopNostalgia}] = useSound(nostalgicMusic, {
        interrupt: true,
        volume: sliderValue,
    });

    const [ romance, {sound: romanceSound, stop: stopRomantic}] = useSound(romanticMusic, {
        interrupt: true,
        volume: sliderValue,
    });

    function handleVolumeChange(newValue){
        setSliderValue(newValue);
        bossSound.volume(newValue);
        nostSound.volume(newValue);
        romanceSound.volume(newValue);
    };

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
                nostalgic()
                setDiscPlaying(true)
            }
        }

        else if(discPlaying === false && discDeux.top < rect.top + 15 && discDeux.bottom > rect.bottom - 15){
            if (discDeux.left > rect.left - 15 && discDeux.right < rect.right + 70){
                boss()
                setDiscPlaying(true)
            }
        }

        else if(discPlaying === false && discTrois.top < rect.top + 15 && discTrois.bottom > rect.bottom - 15){
            if (discTrois.left > rect.left - 15 && discTrois.right < rect.right + 70){
                romance()
                setDiscPlaying(true)
            }
        }

        else if(discPlaying === true){
            stopBoss()
            stopNostalgia()
            stopRomantic()
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
                    <div id = "base">
                        <div id = "stick"></div>
                        <div id = "anchor"></div>
                    </div>
                </div>
                <div id = "play" onClick={checkOverlap}>
                    <p>{discPlaying ? "Stop!": "Play!"}</p>
                </div>
                <div id = "sound-mixer">
                    <p>Click and drag the records!</p>
                    <div className = "ind-slider">
                        <Slider value = {sliderValue} onValueChange={handleVolumeChange}/>
                        <img id = "volume-img" src = {volumeImg}></img>
                    </div>
                    <div id = "ambient">
                        <Toggle/>
                    </div>
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