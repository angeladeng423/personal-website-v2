import React, { useContext } from "react";
import { ClickedContext } from "../context/ClickedContext";
import "./Skills.css";

function Skills(props) {
    const { clickedList, addClicked, removeClicked } = useContext(ClickedContext);
    const isSkillClicked = clickedList.includes(props.skill);

    return (
        <div
            id={isSkillClicked ? "clicked" : "skill"}
            onClick={() => {
                if (isSkillClicked) {
                    removeClicked(props.skill);
                } else {
                    addClicked(props.skill);
                }
            }}
        >
            <p>{props.skill}</p>
        </div>
    );
}

export default Skills;