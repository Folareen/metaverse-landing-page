import React, { useLayoutEffect, useRef, useState } from 'react'
import TopCard from '../TopCard'

const Carousel = () => {
    const [carouselPos, setCarouselPos] = useState(0)

    const topCarouselRef = useRef(null)
    const topCardRef = useRef(null)
    const topCarouselContainerRef = useRef(null)

    const [topCarouselWidth, setTopCarouselWidth] = useState(0)
    const [topCardWidth, setTopCardWidth] = useState(0)
    const [topCarouselContainerWidth, setTopCarouselContainerWidth] = useState(0)

    useLayoutEffect(() => {
        setTopCarouselWidth(topCarouselRef?.current?.clientWidth)
        setTopCardWidth(topCardRef?.current?.clientWidth)
        setTopCarouselContainerWidth(topCarouselContainerRef?.current?.clientWidth)
    }, [topCarouselRef?.current, topCardRef?.current, topCarouselContainerRef?.current])


    return (
        <div className='carousel-parent'>
            <button className={`carousel__btn carousel__btn--prev ${carouselPos > 0 ? '' : 'disabled'} `} onClick={() => {
                if (carouselPos > 0) {
                    setCarouselPos(carouselPos - (topCardWidth + 56))
                }
            }}>
                <i className="fa-solid fa-angle-left"></i>
            </button>
            <div className='carousel'>

                <div className='carousel__container' ref={topCarouselContainerRef}>
                    <div ref={topCarouselRef} className={`content`} style={{ transform: `translateX(-${carouselPos}px)` }}>
                        {
                            [
                                {
                                    coverImg: '/top-stories-one.png',
                                    titleText: 'Analytics Insight',
                                    titleImg: '/top-stories-one-icon.png',
                                    description: 'It is not just Meta in the Metaverse, know the other Tech Giants shaping the Metaverse'
                                },
                                {
                                    coverImg: '/top-stories-two.png',
                                    titleText: 'The Independent',
                                    titleImg: '/top-stories-two-icon.png',
                                    description: 'Tim Cook Says people don’t know ‘what the metaverse is’ as Apple Fights with Facebook'
                                },
                                {
                                    coverImg: '/top-stories-one.png',
                                    titleText: 'Cointelegraph',
                                    titleImg: '/top-stories-one-icon.png',
                                    description: 'Japanese Prime Minister says government investment in digital transformation will include Metaverse, NFTs'
                                },
                                {
                                    coverImg: '/top-stories-two.png',
                                    titleText: 'The Independent',
                                    titleImg: '/top-stories-two-icon.png',
                                    description: 'The China Tech Giants chasing $8Trillion of Metaverse Gold'
                                },
                            ].map(({ coverImg, titleText, titleImg, description }) => (
                                <div ref={topCardRef}>
                                    <TopCard coverImg={coverImg} titleText={titleText} titleImg={titleImg} description={description} />
                                </div>
                            )

                            )
                        }
                    </div>
                </div>
            </div>
            <button className={`carousel__btn carousel__btn--next ${carouselPos < topCarouselWidth - topCarouselContainerWidth ? '' : 'disabled'}  `} onClick={() => {
                if (carouselPos < topCarouselWidth - (topCarouselContainerWidth + 56)
                ) {
                    setCarouselPos(carouselPos + (topCardWidth) + 56)
                }
            }}>
                <i className="fa-solid fa-angle-right"></i>
            </button>
        </div>
    )
}

export default Carousel