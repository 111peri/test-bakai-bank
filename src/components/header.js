import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css"; 
import bell from "../styles/bell.png";
import { IconToggle } from "./iconToggle";

export function Header() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupColor, setPopupColor] = useState("white");
    
    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <header>
            <nav className="header-container">
                <div className="quantity">0</div>
                <div className="list-name">
                    <ul>
                        <li>
                            <img className="icon-image" src={bell} alt="Bell" onClick={openPopup} />
                        </li>
                        <IconToggle setPopupColor={setPopupColor} />
                        <Link to="/icon" className="icon" onClick={openPopup}>И</Link>
                        <li>
                            <p className="name">Иванов Иван Иванович </p>
                        </li>
                    </ul>
                </div>
            </nav>
           
            {showPopup && (
                <div className="popup" style={{ backgroundColor: popupColor }}>
                    <p>История посещений</p>
                    <p>Безопасность и вход</p>
                    <button onClick={closePopup}>Выйти</button>
                    <p className="last-visit">Ваш последний визит: 09.02.2024 16:44:06</p>
                    <p className="female-name">Петрова Наталья Владимировна</p>
                    <p className="account-settings"> Под вашим аккаунтом вы можете <b>создавать, изменять, подписывать и отправлять транзакции.</b></p>
                </div>
            )}
        </header>
    );
}
