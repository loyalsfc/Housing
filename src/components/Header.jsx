import React, { useState } from 'react'
import logo from '../assets/logo.png'

function Header() {
    //set the state of the mobile navigation menu
    const [mobileMenuShown, setMobileMenuShow] = useState(false)

    //Toggling the state to hide or show
    function toggleNav(){
        setMobileMenuShow(!mobileMenuShown)
    }

    return (
        <header className='pt-[19px] pb-[22px] border-b-[0.5px] border-b-white flex items-end font-medium font-dm-sans text-lg'>
            <div className={`h-screen ${mobileMenuShown ? 'w-full' : 'w-0'} fixed top-0 left-0 bg-white z-50 flex items-center justify-center  overflow-hidden transition-all`}>
                <svg onClick={toggleNav} className='absolute top-8 right-6' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.317668 1.85151C0.216955 1.75079 0.137065 1.63123 0.0825594 1.49964C0.0280538 1.36805 1.06119e-09 1.22702 0 1.08459C-1.06119e-09 0.942158 0.0280538 0.801122 0.0825594 0.669534C0.137065 0.537946 0.216955 0.418381 0.317668 0.317668C0.418381 0.216955 0.537946 0.137065 0.669534 0.0825594C0.801122 0.0280538 0.942158 -1.06119e-09 1.08459 0C1.22702 1.06119e-09 1.36805 0.0280538 1.49964 0.0825594C1.63123 0.137065 1.75079 0.216955 1.85151 0.317668L13 11.4683L24.1485 0.317668C24.2492 0.216955 24.3688 0.137065 24.5004 0.0825594C24.6319 0.0280538 24.773 0 24.9154 0C25.0578 0 25.1989 0.0280538 25.3305 0.0825594C25.4621 0.137065 25.5816 0.216955 25.6823 0.317668C25.783 0.418381 25.8629 0.537946 25.9174 0.669534C25.9719 0.801122 26 0.942158 26 1.08459C26 1.22702 25.9719 1.36805 25.9174 1.49964C25.8629 1.63123 25.783 1.75079 25.6823 1.85151L14.5317 13L25.6823 24.1485C25.783 24.2492 25.8629 24.3688 25.9174 24.5004C25.9719 24.6319 26 24.773 26 24.9154C26 25.0578 25.9719 25.1989 25.9174 25.3305C25.8629 25.4621 25.783 25.5816 25.6823 25.6823C25.5816 25.783 25.4621 25.8629 25.3305 25.9174C25.1989 25.9719 25.0578 26 24.9154 26C24.773 26 24.6319 25.9719 24.5004 25.9174C24.3688 25.8629 24.2492 25.783 24.1485 25.6823L13 14.5317L1.85151 25.6823C1.75079 25.783 1.63123 25.8629 1.49964 25.9174C1.36805 25.9719 1.22702 26 1.08459 26C0.942158 26 0.801122 25.9719 0.669534 25.9174C0.537946 25.8629 0.418381 25.783 0.317668 25.6823C0.216955 25.5816 0.137065 25.4621 0.0825594 25.3305C0.0280538 25.1989 0 25.0578 0 24.9154C0 24.773 0.0280538 24.6319 0.0825594 24.5004C0.137065 24.3688 0.216955 24.2492 0.317668 24.1485L11.4683 13L0.317668 1.85151Z" fill="#333333"/>
                </svg>
                <ul className='flex flex-col  text-[#18191F] text-xl font-semibold gap-14 text-center'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>Landlord</li>
                    <li className='cursor-pointer'>Tenants</li>
                    <li className='cursor-pointer'>Contact Us</li>
                </ul>
            </div>
            <img src={logo} alt="" className='h-[50px]'/>
            <nav className='mx-auto hidden md:block'>
                <ul className='flex gap-14'>
                    <li className='active-nav cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>Landlord</li>
                    <li className='cursor-pointer'>Tenants</li>
                    <li className='cursor-pointer'>Contact Us</li>
                </ul>
            </nav>
            <svg onClick={toggleNav} className='md:hidden ml-auto' width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24.5H29.0312M10 17.25H29.0312M10 10H29.0312" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </header>
    )
}

export default Header
