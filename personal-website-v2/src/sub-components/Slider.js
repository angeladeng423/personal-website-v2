import React, { useEffect, useRef, useState } from 'react';
import "./Slider.css";

function Slider({ value, onValueChange }) {
    const sliderRef = useRef(null);
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const updateSlider = (clientX) => {
        if (sliderRef.current && containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const offsetX = clientX - rect.left;
            const newValue = Math.max(0.05, Math.min(0.9, offsetX / rect.width));
            onValueChange(newValue); 
        }
    };

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (isDragging) {
                updateSlider(event.clientX);
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, onValueChange]);

    return (
        <div id="slider" ref={containerRef}>
            <div id="select" ref={sliderRef} onMouseDown={() => setIsDragging(true)} style={{ left: `${value * 100}%` }}></div>
        </div>
    );
}

export default Slider