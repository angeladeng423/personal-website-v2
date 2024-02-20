import { useContext } from "react";
import { TagContext } from "../context/TagContext";
import Tag from "./Tag";

function TagCont(){
    const { tag } = useContext(TagContext);
    return(
        <div>{tag === 'tagOn' && <Tag/>}</div>
    )
}

export default TagCont;