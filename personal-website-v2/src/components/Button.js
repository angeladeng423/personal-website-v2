import { useState } from 'react'
import '../components-css/Button.css'

function Button(props){
    const [clicked, setClicked] = useState(false)
    const [visible, setVisible] = useState("invisible")

    function checkClicked(){
        setClicked(!clicked)
    }

    if(props.function === "rain" && clicked === true){
        setVisible("visible")
    }

    return(
        <div className = "button" onClick = {checkClicked}>
            {props.text}
        </div>
    )
}

export default Button