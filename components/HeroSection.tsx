import React from 'react'
import Container from './Container'

const HeroSection = () => {
    return (
        <div className='hero-section '>

            <div className='hero-section__content'>
                <h3 className='title'>Discover <br />
                    Explore, & <br /> Experience The <br /> <p className='highlight'>Extraordinary</p>
                    Metaverse World
                </h3>
                <p className='description'>
                    the metaverse is A Iteration of The internet as a single, universal and immersive virtual world that is facilitated by the use of virtual Reality(vR) and augmented reality(AR) Headsets.
                </p>
                <div className='cta-buttons'>
                    <button className='explore-btn'>Explore</button>
                    <button className='benefits-btn'>Benefits</button>
                </div>
            </div>

            <div className='hero-section__image'>
                <img src="/hero-img.png" alt="hero-section" />
            </div>

        </div>
    )
}

export default HeroSection