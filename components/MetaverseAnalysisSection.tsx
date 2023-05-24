import React from 'react'
import Container from './Container'
import MetaverseIcon from './MetaverseIcon'
import SectionHeading from './SectionHeading'

const MetaverseAnalysisSection = () => {
    return (
        <Container className='metaverse-analysis-section'>
            <SectionHeading >
                Metaverse Analysis
            </SectionHeading>
            <div className='body'>
                <div className='body__image'>
                    <img src='/metaverse-analysis.png' />
                </div>
                <div>
                    <div className='body__content body__content--one'>
                        <div className='title-box'>
                            <MetaverseIcon />
                            <h3>
                                Metaverse Within 3years
                            </h3>
                        </div>
                        <div className='description'>
                            {
                                [
                                    { value: '$60B+', title: 'Market Value' },
                                    { value: '400M+', title: 'Monthly Users' },
                                    { value: '10K+', title: 'Community' },
                                ].map(({ title, value }) => (
                                    <div className='stat'>
                                        <p className='value'>
                                            {value}
                                        </p>
                                        <p className='title'>
                                            {title}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='body__content body__content--two'>
                        <div className='title-box'>
                            <MetaverseIcon />
                            <h3>
                                The Metaverse Evolution
                            </h3>
                        </div>
                        <div className='description'>
                            {
                                [
                                    { icon: '/metaverse-microsoft.png', title: 'Microsoft' },
                                    { icon: '/metaverse-meta.png', title: 'Meta' },
                                    { icon: '/metaverse-google.png', title: 'Google' },
                                    { icon: '/metaverse-nvidia.png', title: 'Nvidia' },
                                    { icon: '/metaverse-epic-games.png', title: 'Epic Games' },
                                    { icon: '/metaverse-roblox.png', title: 'Roblox' },
                                ].map(({ icon, title }) => (
                                    <div className='company'>
                                        <img src={icon} />
                                        <p>
                                            {title}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    )
}

export default MetaverseAnalysisSection