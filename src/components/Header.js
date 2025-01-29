import React from "react";
import logo from "../images/logo.png";


export default function Header (){
return(
<header className="header-main-div">
    <img
    src={logo}
    className="header-logo"
    />
    <div className="header-second-div">
    <ul className="nav-list">
        <li className="nav-item">
            Ваш лікар
        </li>
        <li className="nav-item">
            Досвід
        </li>
        <li className="nav-item"> 
             Послуги
        </li>
    </ul>
    <button className="header-button">
        Запишіться зараз
    </button>
    </div>
</header>
)
}
