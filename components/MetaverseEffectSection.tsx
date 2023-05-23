import React from 'react'
import Container from './Container'
import MetaverseIcon from './MetaverseIcon'
import SectionHeading from './SectionHeading'

const MetaverseEffectSection = () => {
    return (
        <Container className='metaverse-effect-section'>
            <SectionHeading >
                Metaverse Effect
            </SectionHeading>
            <div className='body'>
                <div className='body__content'>
                    <div className='title-box'>
                        <MetaverseIcon />
                        <h3>
                            The Metaverse Effect
                        </h3>
                    </div>
                    <p className='description'>
                        The Metaverse has a potential on everyday life. While people will still need real human interaction, the Metaverse could create better ways to communicate with those who are far away. It has created a bridge between the unseen world and the world we are with the use of Augmented Reality(AR) and Virtual Reality(VR) as its main feature.
                        Metaverse has created so many interest in the world of Technology today. It has been seen as a great futuristic communication problem solving technology.
                    </p>
                </div>
                <div className='body__image'>
                    <img src='/metaverse-effect.png' />
                </div>

            </div>

        </Container>
    )
}

export default MetaverseEffectSection