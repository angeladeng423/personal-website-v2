import Disc from './Disc'
import './Music.css'

function Music(){
    return(
        <div id = "cont-two">
            <div id = "cont-one">
                <div id = "record-player">
                
                </div>
                <div id = "cat-dance">
                    
                </div>
            </div>
            <div id = "disc-choice">
                <Disc diskType = "disc-one"/>
            </div>
        </div>
    )
}

export default Music