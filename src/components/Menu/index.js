import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button/index.js';



function Menu() {
    return (
        <nav className="Menu"> 
           <Link to="/">
           <img className="Logo" src={Logo} alt= "myflix" />
           </Link>
           <Button as={Link} className="ButtonLink" to="/cadastro/video">
            NOVO VIDEO
           </Button>
        </nav>
    );
}

export default Menu; 