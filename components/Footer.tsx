import Image from 'next/image'
import React from 'react'
import Container from './Container'
import SectionHeading from './SectionHeading'

const Footer = () => {
    return (
        <Container className='footer'>
            <SectionHeading>
                Get More Updates
            </SectionHeading>
            <p>
                Join our mailing list to stay in the loop with newest development in the Metaverse and it’s world
            </p>
            <div className='subscribe-box'
            >
                <input type='email' placeholder='Your Email...' className='' />
                <button className='' type='submit' >
                    Join List
                </button>
            </div>
            <div className="divider"></div>

            <footer className='main-footer'>
                <div className='logo-side'>
                    <div className='logo'>
                        <Image src="/logo.png" alt="logo" width={60} height={60} />
                        <h1 className='logo__title'>METAVERSE</h1>
                    </div>
                    <p>
                        Bringing the future close to everyone and making life as easy as we can. Our Design is dedicated to ease, fun and a better world
                    </p>
                    <div className="social-icons">
                        {
                            ['/discord.png', '/twitter.png', '/instagram.png', '/youtube.png'].map(
                                (icon) => (
                                    <img src={icon} />
                                )
                            )
                        }
                    </div>
                </div>
                <div className='links-side'>
                    <div>
                        <h4>
                            Marketplace
                        </h4>
                        <div>
                            {
                                ['Explore', 'Books', 'How It works', 'Help'].map(
                                    (link) => (
                                        <p>
                                            {link}
                                        </p>
                                    )
                                )
                            }
                        </div>
                    </div>
                    <div>
                        <h4>
                            Idea
                        </h4>
                        <div>
                            {
                                ['Fiction', 'Creation', 'Expectations', 'Partners'].map(
                                    (link) => (
                                        <p>
                                            {link}
                                        </p>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>

            </footer>
            <p>
                &copy; 2022 METAVERSE. all Right Reserved
            </p>
        </Container>
    )
}

export default Footer