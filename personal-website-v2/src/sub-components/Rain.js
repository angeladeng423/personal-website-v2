import './Rain.css';

function Rain(props){
    const kaomoji = ["(´ ∀ ` *)", "٩(｡•́‿•̀｡)۶", "(๑˃ᴗ˂)ﻭ", "(〃＾▽＾〃)", "┐(︶▽︶)┌	", "☆⌒(>。<)", "ヽ(>∀<☆)ノ", "⸜( ´ ꒳ ` )⸝", "⸜(*ˊᗜˋ*)⸝	", "(„• ᴗ •„)"]
    const randomLeft = `${Math.random() * (95)}vw`;
    const animationDelay = `${Math.random() * (1 - 0.1) + 0.1}s`

    return(
        <div id = {props.id} style={{ left: randomLeft, animationDelay: animationDelay}}>
            {kaomoji[props.num]}
        </div>
    )
}

export default Rain;