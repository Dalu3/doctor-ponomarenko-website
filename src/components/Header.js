import React from "react";
import logo from "../images/logo.png";


export default function Header (){
    const scrollToTop = () => {
        window.scrollTo({ top:0, behavior: "smooth"});
    };
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if(section){
            section.scrollIntoView({behavior:"smooth"})
        }
    };
return(
<header className="header-main-div">
    <img
    src={logo}
    onClick={scrollToTop}
    className="header-logo"
    />
    <div className="header-second-div">
    <ul className="nav-list">
        <li className="nav-item" onClick={() => scrollToSection('about')}>
            Ваш лікар
        </li>
        <li className="nav-item" onClick={() => scrollToSection('experience')}>
            Досвід
        </li>
        <li className="nav-item" onClick={() => scrollToSection('services')}> 
             Послуги
        </li>
    </ul>
    <button className="header-button" onClick={() => scrollToSection('footer')}>
        Запишіться зараз
    </button>
    </div>
</header>
)
}
