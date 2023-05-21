import React, { useState } from 'react'
import Image from 'next/image'

const Header = () => {
    const [isNavActive, setIsNavActive] = useState<boolean>(false)

    return (
        <header className='header'>
            <div className='logo'>
                <Image src="/logo.png" alt="logo" width={60} height={60} />
                <h1 className='logo__title'>METAVERSE</h1>
            </div>

            <nav className={`nav ${isNavActive ? 'active' : ''}`}>
                {
                    ['marketplace', 'inventions', 'community', 'benefits', 'explore'].map((link, index) => (
                        <a href="#" key={index} className='nav__link'>{link}</a>
                    ))
                }
            </nav>
            <button className={`hamburger ${isNavActive ? 'active' : ''}`} onClick={() => {
                setIsNavActive((prev) => (!prev))
            }}>
                <span className='hamburger__top'></span>
                <span className='hamburger__middle'></span>
                <span className='hamburger__bottom'></span>
            </button>
        </header>
    )
}

export default Header