import React from 'react'
import Container from './Container'
import MetaverseIcon from './MetaverseIcon'
import SectionHeading from './SectionHeading'

const MetaverseEvolutionSection = () => {
    return (
        <Container className='metaverse-evolution-section'>
            <SectionHeading className='heading'>
                Metaverse Evolution
            </SectionHeading>
            <div className='body'>
                <div className='body__image'>
                    <img src='/metaverse-evolution.png' />
                </div>
                <div className='body__content'>
                    <div className='title-box'>
                        <MetaverseIcon />
                        <h3>
                            The Metaverse Evolution
                        </h3>
                    </div>
                    <p className='description'>
                        It all started as a fiction in 1992 with a book written by Neal Stephenson. A book called Snow Crash. He described humans as programmable avatars that interacts with each other and software agents in a three-dimensional virtual space that uses the metaphor of the real world.
                        Metaverse has passed the fictional phase and turned to a futuristic project that lots of big technology companies is investing billions of dollars into. It has been said to become a bigger inventiion than the internet itself. The metaverse is definitely the next big thing according to Mark Zuckerberg.
                    </p>
                </div>
            </div>

        </Container>
    )
}

export default MetaverseEvolutionSection