import React from 'react'
import SectionHeading from '../SectionHeading'
import SeeMoreBtn from '../SeeMoreBtn'
import Carousel from './Carousel'

const TopStoriesSection = () => {
    return (
        <div>
            <SectionHeading>
                Top Stories On Metaverse
            </SectionHeading>
            <Carousel />
            <SeeMoreBtn />
        </div>
    )
}

export default TopStoriesSection