import { useContext, useEffect, useState } from 'react';
import '../components-css/Button.css';
import { RainContext } from '../context/RainContext';
import { TagContext } from '../context/TagContext';


function Button(props){
    const [func, setFunc] = useState(() => {})
    const { toggleRain } = useContext(RainContext)
    const { toggleTag } = useContext(TagContext)

    useEffect(() => {
        if(props.function === "rain"){
            setFunc(() => toggleRain)
        } else if (props.function === "tag"){
            setFunc(() => toggleTag)
        }
    }, [])

    return(
        <div className = "button" onClick = {func}>
            {props.text}
        </div>
    )
}

export default Button;