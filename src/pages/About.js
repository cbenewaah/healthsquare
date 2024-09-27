import React from 'react'
import Card2 from '../components/Card2'
import Header from '../components/Header'
import Footer from '../components/Footer'



function About() {
    return (
        <div> <br /> <br />

            <div class="upper-section">
                <div className='flex flex-row'>
                    <div class="pt-28">
                        <div className='font-semibold text-6xl text-left p-2'>
                            <h1>Compassionate</h1>
                            <h1>Care for Every</h1>
                            <h1>Patient like you</h1>
                        </div>
                        <div className='text-gray- text-left p-3'>
                            <p>Providing Exceptional and Compassionate Care</p>
                            <p>with Advanced Medical Solutions for Every</p>
                            <p>Patient</p>
                        </div>
                        <div class="bg-green-500 border text-white"><a href="/services" class="button white-button w-button">Learn More</a></div>
                    </div>
                    <div className='pl-12 justify-end'>
                        <img src='AboutImage01.jpg' alt='a doctor in the lab' />
                    </div>
                </div>
                <br />

                <div className='flex flex-row space-x-9 animate-slowscroll'>
                    <div class="logo1-wrapper"> <img src='logo1.svg' alt='Cloud company logo' /> </div>
                    <div class="logo1-wrapper"> <img src='logo2.svg' alt='Rise company logo' /> </div>
                    <div class="logo1-wrapper"><img src='logo3.svg' alt='Trace company logo' /></div>
                    <div class="logo1-wrapper"><img src='logo4.svg' alt='Volume company logo' /></div>
                    <div class="logo1-wrapper"><img src='logo5.svg' alt='Clues company logo' /></div>
                </div>

            </div>

            <div className='space-x-6 m-8'>
                <div className='flex flex-row mt-16'>
                    <div className='text-left pl-6 pb-6'>
                        <h2 className='font-semibold text-4xl'>You're in
                            <span class="text-green-500 "> Good Hands</span>
                        </h2>
                        <div paragraph-section>
                            <p>Lorem ipsum dolor sit amet consectetur.In quis aliquet leo in vel</p>
                            <p>pharetra pellentesque convallis.Cras aliquam a faucibus</p>
                        </div>
                    </div>
                    <div class='space-x-12 flex flex-row pl-16'>
                        <div className='border'>
                            <div className='text-green-500 font-bold text-4xl px-20 py-5'>2B +</div>
                            <div stats-paragraph>
                                <p>Lorem ipsum </p>
                                <p>dolor</p>
                            </div>
                        </div>
                        <div className='border'>
                            <div className='text-green-500 font-bold text-4xl px-20 py-5'>2008</div>
                            <div stats-paragraph>Lorem ipsum dolor</div>
                        </div>
                    </div>
                </div> <br />
                <div className='image-holder'>
                    <img src='AboutImage02.jpg' alt='a male doctor diagnosing male patient' />
                </div>
            </div> <br />

            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <div class='image-holder'>
                        <img src='GridImage01.jpg' alt='image of a female doctor diagnosing a patient' />
                    </div>
                    <div paragraph-holder>
                        <div className='bg-green-500 text-white'>APPOINTMENT</div>
                        <div className='font-light text-3xl text-left'>
                            <h3>Meet Our Expert Team of</h3>
                            <h3>Specialized Doctors</h3>
                            
                        </div>
                        <div className='text-left'>
                            <p>Delivering Exceptional Care and Advanced Medical</p>
                            <p>Solutions for Your Health and Well-being</p>
                        </div>
                        <div className='text-left'>
                            <a href="/about" class="bg-green-500 text-white">Learn More</a>
                        </div>
                    </div>
                </div> <br/>
                <div className='flex flex-row'>
                    <div paragraph-holder2>
                        <div className='bg-green-500 text-white'>APPOINTMENT</div>
                        <div className='font-light text-3xl text-left'>
                            <h3>Our Dedicated Medical</h3>
                            <h3>and Support Staff</h3>
                            
                        </div>
                        <div className='text-left'>
                            <p>Delivering Exceptional Care and Advanced Medical</p>
                            <p>Solutions for Your Health and Well-being</p>
                        </div>
                        <div className='text-left'>
                            <a href="/about" class="bg-green-500 text-white">Learn More</a>
                        </div>
                    </div>
                    <div class='image2-holder'>
                        <img src='GridImage02.jpg' alt='image of male doctor diagnosing a patient' />
                    </div>
                </div>
            </div>
            <div className='fourth-section'>
                <div className='heading-section'>
                    <div class='title-section'>
                        <h2 class='title'>Meet Our Doctors</h2>
                    </div>
                    <div class='section-paragraph'>
                        <p>Nisl nunc mi ipsum faucibus. Fringilla est ullamcorper eget nulla.</p>
                        <p>Nisi porta lorem.</p>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='flex flex-col'>
                        <div class='doctor-image'>
                            <img className='' src='docto_01.jpg' alt='a doctor image' />
                        </div>
                        <div class='name'>Luke Voiles</div>
                        <div class='position'>Chief Executive Officer</div>
                    </div>
                    <div className='doctor-slide'>
                        <div class='doctor-image'>
                            <img src='doctor_02.jpg' alt='a doctor image' />
                        </div>
                        <div class='name'>Luke Voiles</div>
                        <div class='position'>Chief Executive Officer</div>
                    </div>
                    <div className='doctor-slide'>
                        <div class='doctor-image'>
                            <img src='doctor03.jpg' alt='a doctor image' />
                        </div>
                        <div class='name'>Luke Voiles</div>
                        <div class='position'>Chief Executive Officer</div>
                    </div>

                </div>
            </div>
            <div className='fifth-section'>
                <div className='section-title'>
                    <div className=';title'>
                        <h3>Frequently asked questions</h3>
                    </div>
                    <div> Everything you need to know</div>

                    <div className='questions-holder'>
                        <div className='question-container'>
                            <div className='question'>
                                <div class="question-text">How does HealthSquare's AI Search work?</div>
                                <img src='plus.svg' alt='plus sign' />
                            </div>
                            <div class='answer-holder'>
                                <div class='answer-text'>
                                    HealthSquare's &nbsp;AI Search utilizes advanced algorithms to understand user queries and deliver highly accurate results.
                                    It learns from user interactions, ensuring a continuously improving and intuitive search experience.
                                </div>
                            </div>
                        </div>
                        <div className='question-container'>
                            <div className='question'>
                                <div class="question-text">How secure are HealthSquare's servers?</div>
                                <img src='plus.svg' alt='plus sign' />
                            </div>
                            <div class='answer-holder'>
                                <div class='answer-text'>
                                    Security is our priority. HealthSquare employs robust measures to ensure the safety of your data.
                                    Our secure servers are designed to protect your information from potential threats, providing peace of mind.
                                </div>
                            </div>
                        </div>
                        <div className='question-container'>
                            <div className='question'>
                                <div class="question-text">Can I customize the dashboard to fit my business needs?</div>
                                <img src='plus.svg' alt='plus sign' />
                            </div>
                            <div class='answer-holder'>
                                <div class='answer-text'>
                                    Absolutely! HealthSquare offers a fully customizable dashboard, allowing you to arrange widgets and modules based on your preferences.
                                    Tailor your workspace to suit the unique requirements of your business.
                                </div>
                            </div>
                        </div>
                        <div className='question-container'>
                            <div className='question'>
                                <div class="question-text">How does 'Best of the Best' feature benefit my business?</div>
                                <img src='plus.svg' alt='plus sign' />
                            </div>
                            <div class='answer-holder'>
                                <div class='answer-text'>
                                    Best of the Best' feature is a curated selection of the most efficient tools and functionalities within HealthSquare.
                                    It ensures optimal performance, streamlining your workflow for a superior user experience.
                                </div>
                            </div>
                        </div>
                        <div className='question-container'>
                            <div className='question'>
                                <div class="question-text">Can I integrate HealthSquare with other applications?</div>
                                <img src='plus.svg' alt='plus sign' />
                            </div>
                            <div class='answer-holder'>
                                <div class='answer-text'>
                                    Yes, you can! HealthSquare supports seamless integration with various third-party applications and services.
                                    Expand the capabilities of your business by connecting Variable with your preferred tools.
                                </div>
                            </div>
                        </div>
                        <div className='question-container'>
                            <div className='question'>
                                <div class="question-text">What support options are available if I encounter issues?</div>
                                <img src='plus.svg' alt='plus sign' />
                            </div>
                            <div class='answer-holder'>
                                <div class='answer-text'>
                                    We've got you covered! Contact our support team directly through the Notify app for instant assistance.
                                    Our dedicated support staff is ready to address your queries and ensure a smooth experience with our platform
                                </div> <br />
                            </div>
                        </div>
                        <div className='ask-questions'>
                            <div className='question'>
                                <div class="question-text">Still have questions?</div>
                                <div class='answer-holder'>
                                    <div class='answer-text'>
                                        Can’t find the answer you’re looking for? Please chat to our friendly team.
                                    </div>
                                </div>

                                <div class='contact'>
                                    <a href="/contact/contact-v1" class="button w-button">Contact Us</a>
                                </div> <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class='sixth-section'>
                <div className='words-section'>
                    <div class='title'> <h2>What people say</h2> </div>
                    <div class='paragraph-section'>
                        <p>Nisl nunc mi ipsum faucibus. Fringilla est ullamcorper eget nulla.</p>
                        <p>Nisi porta lorem.</p>
                    </div>
                </div>
                <div className='flex flex-row space-x-4'>
                    <Card2
                        picture={<img  className='rounded-full' src='pic01.jpg' alt='picture of a lady' />}
                        description='Alex Rodriguez'
                        job='Tech Haven'
                        logo={<img src='logo1.svg' alt='Cloud company logo' />}
                        comment="Best decision we made for our retail business! 'Best of the Best' feature is a game-changer. Variable's commitment to excellence truly stands out. Our efficiency has skyrocketed."
                    />
                    <Card2
                        picture={<img  className='rounded-full' src='pic02.jpg' alt='picture of a lady' />}
                        description='Emily Chen'
                        job='Style Emporium'
                        logo={<img src='logo5.svg' alt='Clues company logo' />}
                        comment="The AI Search feature is a lifesaver. It's like having a personal assistant for product searches. Variable has exceeded our expectations, making our marketing strategies more data-driven and effective."
                    />
                    <Card2
                        picture={<img  className='rounded-full' src='pic03.jpg' alt='picture of a male' />}
                        description='Michael Reynolds'
                        job='CFO, Mega Mart'
                        logo={<img src='logo2.svg' alt='Rise company logo' />}
                        comment="Secure Servers gave us peace of mind. Variable takes data security seriously, and it reflects in the robustness of their servers. Our financial data is in safe hands."
                    />

                </div>
            </div>
            <div className="body-content-section">
                <div>
                    <div>APPOINTMENT</div>
                    <div>
                        <h2 class="title">Get in Touch with Us We’re Here to Help!</h2>
                        <p>
                            Delivering Exceptional Care and Advanced Medical Solutions for
                            Your Health and Well-being
                        </p>
                    </div>
                    <div>
                        <form>
                            <input type="text" placeholder="Your Email" class=""></input>{" "}
                            <br />
                            <br />
                            <textarea placeholder="Your Message" class="text-area"></textarea>
                            <div class="button-holder">
                                <input type="Submit" className="button" value="Submit"></input>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="image-holder">
                    <div>
                        {" "}
                        <img
                            src="/Image.jpg"
                            alt="image of a doctor diagnosing a patient"
                        />{" "}
                    </div>
                    <div>
                        <div>
                            <p>555-0198</p>
                            <p>123 Maple, Spriengfield, IL 62701</p>
                        </div>
                        <div> Monday - Saturday: 9 am - 11.30 pm</div>
                    </div>
                </div>
            </div>

        </div>



    )
}

export default About
