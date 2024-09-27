import React from 'react'
import Card2 from '../components/Card2'
import Card from '../components/Card'
import { FaBrain, FaTooth, FaEye, FaLungs } from "react-icons/fa";
import { GiHeartOrgan, GiStomach } from "react-icons/gi";


function Home() {
  return (
    <div className='flex flex-col'>
      <div class="section-under-navbar">
        <div class="container">
          <div class="flex flex-row">
            <div class="bg-green-400 text-white text-left">
              <div><h1 class="font-semibold text-5xl">Compassionate Care for Every Patient like you</h1></div> <br/>
              <div className='text-xl'><p>Providing Exceptional and Compassionate Care with Advanced Medical Solutions for Every Patient's </p></div> <br/>
              <div class="border border-white bg-white text-green-400"><a href="/services" class="button white-button w-button">Learn More</a>'</div>
            </div>
          
          <div class="image-holder">
            <img src="/HeroImage.jpg" alt='two doctors researching' />
          </div> <br /> <br /> 
          </div>

          <div className='flex flex-row space-x-9 animate-slowscroll' >
            <div class="logo1-wrapper"> <img src='logo1.svg' alt='Cloud company logo' /> </div>
            <div class="logo1-wrapper"> <img src='logo2.svg' alt='Rise company logo' /> </div>
            <div class="logo1-wrapper"><img src='logo3.svg' alt='Trace company logo' /></div>
            <div class="logo1-wrapper"><img src='logo4.svg' alt='Volume company logo' /></div>
            <div class="logo1-wrapper"><img src='logo5.svg' alt='Clues company logo' /></div>
          </div>

          <div className='second-section'>
            <div className='features-title-holder'>
              <h2 class=" font-semibold text-4xl">Discover Our Comprehensive</h2>
              <h2 class=" font-semibold text-4xl" >Range of Services:</h2>
            </div> <br />
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
                icon={<FaTooth className='text-green-400 text-2xl' />}
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
        </div> <br />
        <div className='main-section'>
          <div className='flex flex-row'>
            <div class='image-holder'>
              <img src='GridImage01.jpg' alt='image of a female doctor diagnosing a patient' />
            </div>
            <div paragraph-holder>
              <div>APPOINTMENT</div>
              <div>
                <h3>Meet Our Expert</h3>
                <h3>Team of Specialized</h3>
                <h3>Doctors</h3>
              </div>
              <div>
                <p>Delivering Exceptional Care and Advanced Medical</p>
                <p>Solutions for Your Health and Well-being</p>
              </div>
              <div>
                <a href="/about" class="button w-button">Learn More</a>
              </div>
            </div>
          </div> <br/>
          <div className='flex flex-row'>
            <div class='image2-holder'>
              <img src='GridImage02.jpg' alt='image of male doctor diagnosing a patient' />
            </div>
            <div paragraph-holder2>
              <div>APPOINTMENT</div>
              <div>
                <h3>Our Dedicated</h3>
                <h3>Medical and</h3>
                <h3>Support Staff</h3>
              </div>
              <div>
                <p>Delivering Exceptional Care and Advanced Medical</p>
                <p>Solutions for Your Health and Well-being</p>
              </div>
              <div className='bg-green-500'>
                <a href="/about" class="button w-button">Learn More</a>
              </div>
            </div>
          </div>
          <div class='third-section'>
            <div class='font-semibold text-5xl'>
              <h2>Discover Our Comprehensive</h2>
              <h2>Range of Services:</h2>
            </div> <br/>
            <div class='text-gray-500'>
              <p>Delivering Exceptional Care and Advanced Medical </p>
              <p>Solutions for Your Health and Well-being</p>
            </div> <br/>
            <div className='image-holder'>
              <img src='Image5.jpg' alt='two doctors in a lab' />
            </div> <br/>
            <div class='space-x-12 flex flex-row pl-16 justify-center'>
              <div className='border border-green-400'>
                <div className='text-green-500 font-bold text-4xl px-20 py-5'>2B +</div>
                <div stats-paragraph>Lorem ipsum dolor sit amet</div>
              </div>
              <div className='border border-green-400'>
                <div className='text-green-500 font-bold text-4xl px-20 py-5' >2008</div>
                <div stats-paragraph>Lorem ipsum dolor sit amet</div>
              </div>
              <div className='border border-green-400'>
                <div className='text-green-500 font-bold text-4xl px-20 py-5'>20+</div>
                <div stats-paragraph>Lorem ipsum dolor sit amet</div>
              </div>
            </div>
          </div> <br/> <br/> <br/>

        </div>
        <div class='last-section'>
          <div className='justify-center'>
            <div class='font-semibold text-3xl'> <h2>What people say</h2> </div> <br/>
            <div class='text-gray-600 text-xl'>
              <p>Nisl nunc mi ipsum faucibus. Fringilla est ullamcorper eget nulla.</p>
              <p>Nisi porta lorem.</p>
            </div> <br/>
          </div> <br/>
          <div className='flex flex-row space-x-4'>
            <Card2
              picture={<img className='rounded-full' src='pic01.jpg' alt='picture of a lady' />}
              description='Alex Rodriguez'
              job='Tech Haven'
              logo={<img src='logo1.svg' alt='Cloud company logo' />}
              comment="Best decision we made for our retail business! 'Best of the Best' feature is a game-changer. Variable's commitment to excellence truly stands out. Our efficiency has skyrocketed."
            />
            <Card2
              picture={<img className='rounded-full'  src='pic02.jpg' alt='picture of a lady' />}
              description='Emily Chen'
              job='Style Emporium'
              logo={<img src='logo5.svg' alt='Clues company logo' />}
              comment="The AI Search feature is a lifesaver. It's like having a personal assistant for product searches. Variable has exceeded our expectations, making our marketing strategies more data-driven and effective."
            />
            <Card2
              picture={<img className='rounded-full'  src='pic03.jpg' alt='picture of a male' />}
              description='Michael Reynolds'
              job='CFO, Mega Mart'
              logo={<img src='logo2.svg' alt='Rise company logo' />}
              comment="Secure Servers gave us peace of mind. Variable takes data security seriously, and it reflects in the robustness of their servers. Our financial data is in safe hands."
            />

          </div>
        </div> <br/>

        <div  className="flex flex-row ">
          <div>
            <div className="bg-green-400 text-white p-2">APPOINTMENT</div>
            <div>
              <h2 class="font-semibold text-4xl">Get in Touch with Us We’re Here to Help!</h2>
              <p  className="text-gray-500 p-2">
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
    </div>
  )
}

export default Home
