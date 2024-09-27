import React from 'react'

const Footer = () => {
    return (
        <div className='bg-green-400'>
            <div className='container'>
                <div className='flex flex-row'>
                    <a href='#home'><img src="/myImage.svg" alt="logo of healthsquare" />
                        <div className='footer-heading'>
                            Transform your World with HealthSquare
                        </div>
                        <div className='footer-paragraph-holder'>
                            <p>Aliquam et tellus urna. Phasellus egetadipiscing elit. Mauris id nunc odio. Aliquam et tellus urna.</p>
                        </div>
                    </a>
                    <div className='flex flex-row'>
                        <div className='flex flex-col'>
                            <div className='title-small'>Main Pages</div>
                            <div className='menu-link-wrapper'>
                                <div className='flex flex-col'>
                                    <a href='#home'>Home(Sales)</a>
                                    <a href='#home v1'>Home V1</a>
                                    <a href='#home v2'>Home V2</a>
                                    <a href='#home v3'>HomeV3</a>
                                    <a href='#about'>About</a>
                                    <a href='#features'>Features</a>
                                    <a href='#blog v1'>Blog V1</a>
                                    <a href='#blog v2'>Blog V2</a>
                                    <a href='#blog v3'>Blog V3</a>
                                </div>
                                <div className='flex flex-row'>
                                    <a href='#blog post'>Blog Post</a>
                                    <a href='#contact v1'>Contact V1</a>
                                    <a href='#contact v2'>Contact V2</a>
                                    <a href='#contact v3'>Contact V3</a>
                                    <a href='#pricing'>Pricing</a>
                                    <a href='#pricing single'>Pricing Single</a>
                                    <a href='#checkout'>Checkout</a>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='title-small'>SOCIAL MEDIA</div>
                            <a href='http://instagram.com/'>Instagram</a>
                            <a href='http://fb.com/'>Facebook</a>
                            <a href='http://linkedin.com/'>LinkedIn</a>
                            <a href='http://twitter.com/'>Twitter</a>
                        </div>
                        <div className='flex flex-col space-x-5'>
                            <div className='title-small'>WEBFLOW STUFF</div>
                            <a href='#style-guide'>Style Guide</a>
                            <a href='#licensing'>Licensing</a>
                            <a href='#change-log'>Change Log</a>
                            <a href='#instuctions'>Instructions</a>

                        </div>
                    </div>
                    <div className='footer-divider'>
                        <div className='footer-copyright-holder'>
                            <div className='footer-copyright-center'>
                                "Created by"
                                <a href='http://madebyoversight.com/' class="white-link">OVERFLOW</a>
                            </div>
                        </div>
                        <div className='footer-copyright-holder'>
                            <div className='footer-copyright-center'>
                                "Powered by"
                                <a href='https://webflow.com/' class='white-link' >WEBFLOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
