import React from 'react'

type TopCardProps = {
    coverImg: string,
    titleText: string,
    titleImg: string,
    description: string
}

const TopCard = ({ coverImg, titleText, titleImg, description }: TopCardProps) => {
    return (
        <div className='top-card'>
            <div className='top-card__img'>
                <img src={coverImg} className='' />
            </div>
            <div className='top-card__content'>
                <div>
                    <img src={titleImg} />
                    <p>
                        {titleText}
                    </p>
                </div>
                <p>
                    {description}
                </p>
            </div>

        </div>
    )
}

export default TopCard