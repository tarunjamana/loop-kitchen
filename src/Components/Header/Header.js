import React from 'react'
import logo from '../../icons/restar.jpg';
import './header.scss';

function Header() {
    return (
        <div className='header'>
            <img src={logo} alt="app-logo" className='header__image' />
            <span className='header__text'>Restaruant Search App</span>
        </div>
    )
}

export default Header
