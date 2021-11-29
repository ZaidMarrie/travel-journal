import React from 'react'
import logo from './img/logo.svg'

function Header() {
    return (
        <header className='header flex'>
            <div className='logo flex'>
                <img src={logo} alt='logo' className='logo__img' />
                <p className="logo__title">my travel journal.</p>
            </div>
        </header>
    )
}

export default Header