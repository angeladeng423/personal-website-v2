import React, { createContext, useState } from "react";

const ClickedContext = createContext();

const ClickedProvider = ({ children }) => {
    const [clickedList, setClickedList] = useState([]);

    const addClicked = (clicked) => {
        setClickedList([...clickedList, clicked])
    }

    const removeClicked = (clicked) => {
        setClickedList(clickedList.filter((i) => i !== clicked))
    }

    return (
        <ClickedContext.Provider value = {{clickedList, addClicked, removeClicked}}>
            {children}
        </ClickedContext.Provider>
    )
}

export { ClickedContext, ClickedProvider };
