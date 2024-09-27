import React from 'react'
import Card2 from '../components/Card2'
import Card from '../components/Card'
import { FaBrain, FaTooth, FaEye, FaLungs } from "react-icons/fa";
import { GiHeartOrgan, GiStomach } from "react-icons/gi";



function Services() {
  return (
    <div>
      <h1>Welcome to Services Page</h1>
      <div className='upper-section'>
        <div class='image'>
          <img src='Services Image1.jpg' alt='' />
        </div>
        <div className='flex flex-row space-x-9 animate-slowscroll'>
          <div class="logo1-wrapper"> <img src='logo1.svg' alt='Cloud company logo' /> </div>
          <div class="logo1-wrapper"> <img src='logo2.svg' alt='Rise company logo' /> </div>
          <div class="logo1-wrapper"><img src='logo3.svg' alt='Trace company logo' /></div>
          <div class="logo1-wrapper"><img src='logo4.svg' alt='Volume company logo' /></div>
          <div class="logo1-wrapper"><img src='logo5.svg' alt='Clues company logo' /></div>
        </div>


      </div>
      <div className='second-section'>
        <div className='features-title-holder'>
          <h2 class="upper-title">Discover Our Comprehensive</h2>
          <h2 class="lower-title" Range of Services></h2>
        </div>
        <div className='features-paragraph'>
          <p>Delivering Exceptional Care and Advanced Medical</p>
          <p>Solutions for Your Health and Well-being</p>
        </div>

        <div className='grid grid-cols-3 gap-6'>
          <Card
            icon={<FaBrain className='text-green-400 text-2xl' />}
            title="Neurology"
            description="Lorem ipsum dolor sit amet,consectetur adipiscing elit. 
               Nonmauris nulla tincidunt appetfermentum amet sit."
            buttonText="learn More"
          />
          <Card
            icon={<FaTooth className='text-green-400 text-2xl'  />}
            title="Orthodontics"
            description="Lorem ipsum dolor sit amet,consectetur adipiscing elit. 
               Nonmauris nulla tincidunt appetfermentum amet sit."
            buttonText="learn More"
          />
          <Card
            icon={<FaEye className='text-green-400 text-2xl' />}
            title="Opthalmologists"
            description="Lorem ipsum dolor sit amet,consectetur adipiscing elit. 
               Nonmauris nulla tincidunt appetfermentum amet sit."
            buttonText="learn More"
          />
          <Card
            icon={<FaLungs className='text-green-400 text-2xl' />}
            title="Pulmonology"
            description="Lorem ipsum dolor sit amet,consectetur adipiscing elit. 
               Nonmauris nulla tincidunt appetfermentum amet sit."
            buttonText="learn More"
          />
          <Card
            icon={<GiStomach className='text-green-400 text-2xl' />}
            title="Gastroenterologist"
            description="Lorem ipsum dolor sit amet,consectetur adipiscing elit. 
               Nonmauris nulla tincidunt appetfermentum amet sit."
            buttonText="learn More"
          />
          <Card
            icon={<GiHeartOrgan className='text-green-400 text-2xl' />}
            title="Cardiology"
            description="Lorem ipsum dolor sit amet,consectetur adipiscing elit. 
               Nonmauris nulla tincidunt appetfermentum amet sit."
            buttonText="learn More"
          />
        </div>

      </div>
      <div className='third-section'>
        <div className='features-title-holder'>
          <h2 class="upper-title">Discover Our Comprehensive</h2>
          <h2 class="lower-title" Range of Services></h2>
        </div>
        <div className='features-paragraph'>
          <p>Delivering Exceptional Care and Advanced Medical</p>
          <p>Solutions for Your Health and Well-being</p>
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <div class='image'>
                <img className=' border border-green-500 rounded-full p-4' src='Grid Icons (1).svg' alt='' />
              </div>
              <div class='text-left p-1 m-2'>
                <div  class='font-semibold text-xl'>Modern Instrument </div>
                <p class='no-margins'>We strive to utilize the most </p>
                <p>advanced and reliable instruments</p>
                <p>to ensure accurate diagnoses and</p>
                <p>effective healthcare.</p>
              </div>
            </div>
            <div className='flex flex-row' >
              <div class='image'>
                <img className=' border border-green-500 rounded-full p-4' src='Grid Icons (2).svg' alt='' />
              </div>
              <div class='text-left p-1 m-2'>
                <div  class='font-semibold text-xl'>Easy Billing System </div>
                <p class='no-margins'>Committed to providing a simple </p>
                <p>and user-friendly billing system to</p>
                <p>make the payment process</p>
                <p>smooth and hassle-free.</p>
              </div>
            </div>
            <div className='flex flex-row'>
              <div class='image'>
                <img className=' border border-green-500 rounded-full p-4 ' src='Grid Icons (3).svg' alt='' />
              </div>
              <div  class='text-left p-1 m-2'>
                <div class='font-semibold text-xl'>Qualified Nurses & Staff </div>
                <p class='no-margins'>We pride ourselves on having a </p>
                <p>team of highly qualified nurses</p>
                <p>and staff dedicated to deliver the</p>
                <p>best care for our patients.</p>
              </div>
            </div>

          </div>
          <div className='image-right-section'>
            <img src='Grid Images (4).jpg' alt='scan machine image' />
          </div>
        </div> <br />
        <div className='flex flex-row'>
          <div className='image-section'>
            <img src='Grid Images (5).jpg' alt='' />
          </div>
          <div className='text-left '>
            <div>
              <h3 className='font-semibold text-4xl'>
                You're in
                <span class="text-green-500 "> Good Hands</span>
                
              </h3>
            </div>
            <div className='text-gray-500'>
              <p>Providing Exceptional and Compassionate Care</p>
              <p>with Advanced Medical Solutions for Every</p>
              <p>Patient's Unique Needs</p>
            </div>
            <div  class='space-x-12 flex flex-row mb-4 mt-4'>
              <div className='border'>
                <div className='text-green-500 font-bold text-4xl px-20 py-5'>2B +</div>
                <div stats-paragraph>Lorem ipsum dolor</div>
              </div>
              <div className='border'>
                <div className='text-green-500 font-bold text-4xl px-20 py-5'>2008</div>
                <div stats-paragraph>Lorem ipsum dolor</div>
              </div>
            </div>
            <div class='text-white bg-green-500'>
            <a href="/about" class="button w-button">Learn More</a>
            </div>

          </div>
        </div>
      </div>
      <div class='fourth-section'>
        <div  className='justify-center mb-10 mt-20' >
          <div  class='font-semibold text-3xl'> <h2>What people say</h2> </div>
          <div  class='text-gray-600 text-xl'>
            <p>Nisl nunc mi ipsum faucibus. Fringilla est ullamcorper eget nulla.</p>
            <p>Nisi porta lorem.</p>
          </div>
        </div>
        <div className='flex flex-row space-x-4'>
          <Card2
            picture={<img className='rounded-full' src='pic01.jpg' alt='picture of a lady'/> }
            description='Alex Rodriguez'
            job='Tech Haven'
            logo={<img src='logo1.svg' alt='Cloud company logo'/>}
            comment="Best decision we made for our retail business! 'Best of the Best' feature is a game-changer. Variable's commitment to excellence truly stands out. Our efficiency has skyrocketed."
          />
          <Card2
            picture={<img className='rounded-full'  src='pic02.jpg' alt='picture of a lady'/> }
            description='Emily Chen'
            job='Style Emporium'
            logo={<img src='logo5.svg' alt='Clues company logo'/>}
            comment="The AI Search feature is a lifesaver. It's like having a personal assistant for product searches. Variable has exceeded our expectations, making our marketing strategies more data-driven and effective."
          />
           <Card2
            picture={<img className='rounded-full' src='pic03.jpg' alt='picture of a male'/> }
            description='Michael Reynolds'
            job='CFO, Mega Mart'
            logo={<img src='logo2.svg' alt='Rise company logo'/>}
            comment="Secure Servers gave us peace of mind. Variable takes data security seriously, and it reflects in the robustness of their servers. Our financial data is in safe hands."
            />

        </div>
      </div>
      <div className='fifth-section'>
                <div className='section-title'>
                    <div className='font-semibold text-4xl mt-20'>
                        <h3>Frequently asked questions</h3>
                    </div>
                    <div className='text-gray-700 mt-4 mb-10 text-xl font-thin'> Everything you need to know</div>

                    <div className='questions-holder'>
                        <div className='border border-gray-400'>
                            <div className='flex flex-row'>
                                <div class=" ">How does HealthSquare's AI Search work?</div>
                                <img className='' src='plus.svg' alt='plus sign' />
                            </div>
                           
                        </div>
                        <div className='border border-gray-400'>
                            <div className='flex flex-row'>
                                <div class="question-text">How secure are HealthSquare's servers?</div>
                                <img src='plus.svg' alt='plus sign' />
                            </div>
                           
                        </div>
                        <div className='border border-gray-400'>
                            <div className='flex flex-row'>
                                <div class="question-text">Can I customize the dashboard to fit my business needs?</div>
                                <img src='plus.svg' alt='plus sign' />
                            </div>
                            
                        </div>
                        <div className='border border-gray-400'>
                            <div className='flex flex-row'>
                                <div class="question-text">How does 'Best of the Best' feature benefit my business?</div>
                                <img src='plus.svg' alt='plus sign' />
                            </div>
                            
                        </div>
                        <div className='border border-gray-400'>
                            <div className='flex flex-row'>
                                <div class="question-text">Can I integrate HealthSquare with other applications?</div>
                                <img src='plus.svg' alt='plus sign' />
                            </div>
                           
                        </div>
                        <div className='border border-gray-400'>
                            <div className='flex flex-row'>
                                <div class="question-text">What support options are available if I encounter issues?</div>
                                <img src='plus.svg' alt='plus sign' />
                            </div>
                            
                        </div>
                        <div className='ask-questions'>
                            <div className='border border-gray-400 flex flex-row'>
                              <div className='flex flex-col'>
                                <div class="question-text">Still have questions?</div>
                                <div class='answer-holder'>
                                    <div class='answer-text'>
                                        Can’t find the answer you’re looking for? Please chat to our friendly team.
                                    </div>
                                </div>
                                </div>  

                                <div class='bg-green-400 text-white'>
                                    <a href="/contact/contact-v1" class="button w-button">Contact Us</a>
                                </div> <br/>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             <div className="contact-section">
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

export default Services

