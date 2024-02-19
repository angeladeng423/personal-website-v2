import React, { createContext, useState } from 'react';

const TagContext = createContext();

const TagProvider = ({ children }) => {
    const [tag, setTag] = useState("tagOff");

    function toggleTag(){
        setTag((prevTag) => (prevTag === "tagOff" ? "tagOn" : "tagOff"));
    }

    return (
        <TagContext.Provider value={{ tag, toggleTag }}>
            {children}
        </TagContext.Provider>
    );
};

export { TagContext, TagProvider };
