import React from 'react'
import logo from '../assets/logo.png'

function Header() {
    function toggleNav(){

    }

    return (
        <header className='pt-[19px] pb-[22px] border-b-[0.5px] border-b-white flex items-end font-medium font-dm-sans text-lg'>
            <img src={logo} alt="" className='h-[50px]'/>
            <nav className='mx-auto hidden md:block'>
                <ul className='flex gap-14'>
                    <li className='active-nav'>Home</li>
                    <li>Landlord</li>
                    <li>Tenants</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
            <svg onClick={toggleNav} className='md:hidden ml-auto' width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24.5H29.0312M10 17.25H29.0312M10 10H29.0312" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </header>
    )
}

export default Header
