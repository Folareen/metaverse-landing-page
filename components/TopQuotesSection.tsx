import React from 'react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import SeeMoreBtn from './SeeMoreBtn'
import TopCard from './TopCard'

const TopQuotesSection = () => {
    return (
        <Container className='top-quotes-section'>
            <SectionHeading>
                Top Quotes About Metaverse
            </SectionHeading>
            <div className='cards'>
                {
                    [
                        {
                            coverImg: '/top-quotes-mark.png',
                            titleText: 'Mark Zuckerberg',
                            titleImg: '/top-quotes-mark-icon.png',
                            description: '“Metaverse isn’t a thing a company builds. It’s the next chapter of the internet”'
                        },
                        {
                            coverImg: '/top-quotes-tim.png',
                            titleText: 'Tim Sweeney',
                            titleImg: '/top-quotes-tim-icon.png',
                            description: '“If one central company gains control of metaverse, they will become more powerful than any government and be a god on Earth”'
                        },
                        {
                            coverImg: '/top-quotes-otuyemi.png',
                            titleText: 'Otuyemi Samuel',
                            titleImg: '/top-quotes-otuyemi-icon.png',
                            description: '“Metaverse as a knowledge seems this powerful. Imagine the kind of power that will be created with its reality”'
                        }
                    ].map(
                        ({ coverImg, titleText, titleImg, description }) => (
                            <TopCard coverImg={coverImg} titleText={titleText} titleImg={titleImg} description={description} />
                        )
                    )
                }
            </div>
            <SeeMoreBtn />
        </Container>
    )
}

export default TopQuotesSection