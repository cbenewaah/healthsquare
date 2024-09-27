import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div>
            <div className='bg-green-400 p-4 flex flex-row justify-between' >
                <p className='text-white md:text-right'>555-0198 123 Maple Street, Spriengfield, IL 62701</p>
                <p className='text-white md:text-left'>Monday - Saturday: 9am - 11.30 pm</p>
            </div>

            <div className='flex flex-row space-x-4 p-3 items-center'>
                <div className='pr-40'>
                    <p>
                        <img src="/myImage.svg" alt="logo of healthsquare" />
                    </p>
                </div>


                <ul className='pl-40 flex flex-row space-x-4'>
                    <Link to='/' className=' bg-green-400'>Home</Link>
                    <Link to='/about'>About Us</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/pricing'>Pricing</Link>
                    <Link to='/pages'>Pages</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/cart'>Cart</Link>
                    <Link to='/' className='bg-green-400'>Get Started</Link>
                </ul>


            </div>
        </div>
    )
}

export default Navbar
