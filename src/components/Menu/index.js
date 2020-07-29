import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from '../components/ButtonLink/index.js';

function Menu() {
    return (
        <nav className="Menu"> 
           <a href="/">
           <img className="Logo" src={Logo} alt= "myflix" />
           </a>
           <ButtonLink className="ButtonLink" href="/">

            NOVO VIDEO
           </ButtonLink>
        </nav>
    );
}

export default Menu; 