import React, { useState } from "react";
import moon from "../styles/moon.png";
import sun from "../styles/sun.png"; 
import "./iconToggle.css";

export function IconToggle({ setPopupColor }) {
    const [isMoonVisible, setIsMoonVisible] = useState(true);

    const handleClick = () => {
        setIsMoonVisible(!isMoonVisible);
        if (isMoonVisible) {
            setPopupColor("lightgrey"); 
            document.documentElement.classList.remove("dark-mode");
            document.documentElement.classList.add("light-mode");
        } else {
            setPopupColor("darkgrey"); 
            document.documentElement.classList.remove("light-mode");
            document.documentElement.classList.add("dark-mode");
        }
    };

    return (
        <button className="icon-button" onClick={handleClick}>
            {isMoonVisible ? (
                <img className="icon-image" src={moon} alt="Moon" />
            ) : (
                <img className="icon-image" src={sun} alt="Sun" />
            )}
        </button>
    );
}
