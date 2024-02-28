import React from 'react';
import Draggable from 'react-draggable';
import './Disc.css';

const Disc = React.forwardRef((props, ref) => (
    <Draggable
        bounds={{ top: -100 * window.innerHeight / 100, bottom: 50 * window.innerHeight / 100 }}>
        <div ref={ref}>
            <div id={props.diskType}>
                <div id="inner">
                    <div id="inner-inner"></div>
                </div>
            </div>
        </div>
    </Draggable>
));

export default Disc;
