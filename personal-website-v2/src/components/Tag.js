import { useContext, useEffect, useState } from "react";
import "../components-css/Tag.css";
import { TagContext } from "../context/TagContext";
import useMousePosition from "../useMousePosition";

function Tag() {
  const { tag } = useContext(TagContext);
  const mousePosition = useMousePosition();
  const [dynamicStyles, setDynamicStyles] = useState({
    '--x': '0px',
    '--y': '0px',
  });

  useEffect(() => {
    setDynamicStyles({
      '--x': `${mousePosition.x}px`,
      '--y': `${mousePosition.y}px`,
    });
  }, [mousePosition]);

  return (
    <div id="chase" style={dynamicStyles}>
      <p>≽^•ܫ•^≼</p>
      {JSON.stringify(mousePosition)}
    </div>
  );
}

export default Tag;
