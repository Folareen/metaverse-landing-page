import React from 'react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import SeeMoreBtn from './SeeMoreBtn'

const BooksAboutMetaverse = () => {
    return (
        <Container className='books-about-metaverse'>
            <SectionHeading >
                Books About Metaverse
            </SectionHeading>
            <div className="cards">
                {
                    ['/metaverse-investing.png', '/metaverse-handbook.png', '/snow-crash.png'].map(
                        (link) => (
                            <div className='card'>
                                <div className='card__image'>
                                    <img src={link} />
                                </div>
                                <a href="">
                                    Read Here
                                </a>
                            </div>
                        )
                    )
                }
            </div>
            <SeeMoreBtn />
        </Container>
    )
}

export default BooksAboutMetaverse