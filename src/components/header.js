import React, { useState } from "react";
import { Link } from "react-router-dom";
import bell from "../styles/bell.png";
import moon from "../styles/moon.png";

export function Header() {
    // состояние для отслеживания  всплывающего окна
    const [showPopup, setShowPopup] = useState(false);

    //  для открытия всплывающего окна
    const openPopup = () => {
        setShowPopup(true);
    };

    //  для закрытия всплывающего окна
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
                    <li>
                        <img className="icon-image" src={moon} alt="Moon" />
                    </li>
                    <li>
                        
                        <Link to="/icon" className="icon" onClick={openPopup}>И</Link>
                    </li>
                    <li>
                        <p className="name">Иванов Иван Иванович </p>
                    </li>
                </ul>
                </div>
            </nav>
           
            {showPopup && (
                <div className="popup">
                    <p>История посещений</p>
                    <p>Безопасность и вход</p>
                   <button onClick={closePopup}>Выйти</button>
                   <p className="last-visit">Ваш последний визит: 09.02.2024 16:44:06</p>
                   <p className="female-name">Петрова Наталья Владимировна</p>
                   <p className="account-settings"> Под вашим аккаунтом вы можете <b>создавать,изменять,подписывать и отправлять транзакции.</b></p>
                </div>
            )}
        </header>
    );
}
