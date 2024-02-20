import { useEffect, useState } from 'react'
import './Catact.css'

function Catact(){
    const [catmoji, setCatmoji] = useState("  ／l\n（ﾟ､ ｡ ７\n  l  ~ヽ  \ \n  じしf_,)ノ")
    const [pet, setPet] = useState(false)
    const catState = ["  ／l\n（ﾟ､ ｡ ７\n  l  ~ヽ  \ \n  じしf_,)ノ", "  ／l\n（-､ _ ７\n  l  ~ヽ  \ \n  じしf_,)ノ", "  ／l\n（-ω 、７\n  l  ~ヽ  \ \n  じしf_,)ノ", "  ／l\n（-ω 、７  <3\n  l  ~ヽ  \ \n  じしf_,)ノ"]

    useEffect(() => {
        const intervalID = setInterval(() => {
            if(catmoji === catState[0] && pet === false){
                setCatmoji(catState[1])
            } else {
                if(pet === false){
                    setCatmoji(catState[0])
                }
            }

            if(pet === true){
                setCatmoji(catState[3])
            }
        }, 700);

        return () => clearInterval(intervalID);
    })

    return(
        <div>
            <div id = "pet-da-cat">
                <pre onMouseLeave = {() => {setPet(false)}} onMouseEnter = {() => {setCatmoji(catState[2]); setPet(true)}}>{catmoji}</pre>
            </div>
            <div id = "contact">
                
            </div>
        </div>
    )
}

export default Catact