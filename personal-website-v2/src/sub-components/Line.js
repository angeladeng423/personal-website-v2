import "./Line.css";

function Line(props){
    return(
        props.lineType === "vl" ? 
        <div className = "vl" id = {props.id}
            style = {{height: props.height,
            width: 1,
            position: "absolute",
            left: props.left,
            top: props.top,
            backgroundColor: "white",
            opacity: "50%"}}></div> :
        <div className = "hl" id = {props.id}
            style = {{height: 0.5,
            width: props.width,
            position: "absolute",
            left: props.left,
            top: props.top,
            backgroundColor: "white",
            opacity: "50%"}}></div>
    )
}

export default Line;