import React from "react";
import "./CreditPage.css"; 

export function CreditPage() {
    return (
        <div className="page-container">
            <div className="links-container">
                <a href="/credits" className="link-item">Кредиты</a>
                <a href="/deposit" className="link-item">Депозиты</a>
            </div>
        </div>
    );
}
