import { useContext, useEffect, useState } from "react";
import "../components-css/Tag.css";
import { TagContext } from "../context/TagContext";
import useMousePosition from "../useMousePosition";

function Tag() {
  const { tag } = useContext(TagContext);
  const mousePosition = useMousePosition();
  const [prevPosition, setPrevPosition] = useState({
    x: 0,
    y: 0,
  });

  const [dynamicStyles, setDynamicStyles] = useState({
    '--x': '0px',
    '--y': '0px',
    '--oldx': '0px',
    '--oldy': '0px',
  });

  // update oldx & oldy + 2px
  useEffect(() => {
    const intervalID = setInterval(() => {
      if(prevPosition.x > mousePosition.x && prevPosition.y > mousePosition.y){
        setPrevPosition({
            x: prevPosition.x - 2,
            y: prevPosition.y - 2,
          });
      }

      if(prevPosition.x < mousePosition.x && prevPosition.y < mousePosition.y){
        setPrevPosition({
            x: prevPosition.x + 2,
            y: prevPosition.y + 2,
          });
      }

      if(prevPosition.x > mousePosition.x && prevPosition.y < mousePosition.y){
        setPrevPosition({
            x: prevPosition.x - 2,
            y: prevPosition.y + 2,
          });
      }

      if(prevPosition.x < mousePosition.x && prevPosition.y > mousePosition.y){
        setPrevPosition({
            x: prevPosition.x + 2,
            y: prevPosition.y - 2,
          });
      }

      // equal cases

      if(prevPosition.x === mousePosition.x && prevPosition.y > mousePosition.y){
        setPrevPosition({
            x: prevPosition.x,
            y: prevPosition.y - 2,
          });
      }

      if(prevPosition.x === mousePosition.x && prevPosition.y < mousePosition.y){
        setPrevPosition({
            x: prevPosition.x,
            y: prevPosition.y + 2,
          });
      }

      if(prevPosition.x > mousePosition.x && prevPosition.y === mousePosition.y){
        setPrevPosition({
            x: prevPosition.x - 2,
            y: prevPosition.y,
          });
      }

      if(prevPosition.x < mousePosition.x && prevPosition.y === mousePosition.y){
        setPrevPosition({
            x: prevPosition.x + 2,
            y: prevPosition.y,
          });
      }

      setDynamicStyles({
        '--oldx': `${prevPosition.x}px`,
        '--oldy': `${prevPosition.y}px`,
        '--x': `${mousePosition.x}px`,
        '--y': `${mousePosition.y}px`,
      });
    }, 1);

    return () => clearInterval(intervalID);
  }, [prevPosition, mousePosition]);
  
  return (
    <div id="chase" style={dynamicStyles}>
      <p>≽^•ܫ•^≼</p>
    </div>
  );
}

export default Tag;
