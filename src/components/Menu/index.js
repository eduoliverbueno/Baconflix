import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="Baconflix logo" />

            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo BaconMovie
            </Button>
        </nav>
    );
}

export default Menu;