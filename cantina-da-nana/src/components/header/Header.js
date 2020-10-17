import React from 'react';
import './Header.css'
import Logo from '../../assets/logo.svg'

export default function Header(){
    return(
        <div className="header__container">
            <div className="header__logo logo__container">
                <img src={Logo} alt="Logo" className="header__img" />
                <h1 className="logo__title" >Cantina da Nana</h1>
            </div>
            <input type="search" className="header__search" placeholder="Pesquisar" />
        </div>
    )
}