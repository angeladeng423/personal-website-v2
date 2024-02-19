import React, { createContext, useState } from 'react';

const RainContext = createContext();

const RainProvider = ({ children }) => {
    const [rain, setRain] = useState("invisible");

    function toggleRain(){
        setRain((prevRain) => (prevRain === "visible" ? "invisible" : "visible"));
    }

    return (
        <RainContext.Provider value={{ rain, toggleRain }}>
            {children}
        </RainContext.Provider>
    );
};

export { RainContext, RainProvider };
