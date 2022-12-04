//This components loads both the horizontal navbar on the top of the page and also a vertical navbar when the screen gets small
import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from "react-router-dom";


export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='relative container mx-auto'>
            <div className='flex items-center justify-between'>
                {/* Logo */}
                <a href="" className='pt-2'>
                    <NavLink to="/"><img className="object-cover h-40 w80" src={logo} alt="" /></NavLink>
                </a>

                {/* Menu Items */}
                <ul className="hidden space-x-10 md:flex">
                    <li className="font-semibold hover:text-darkGrayishBlue"><NavLink to="/database">Patient Database</NavLink></li>
                    <li className="font-semibold hover:text-darkGrayishBlue"><NavLink to="/input">New Patient</NavLink></li>
                    <li className="font-semibold hover:text-darkGrayishBlue"><NavLink to="/features">Features</NavLink></li>
                    <li className="font-semibold hover:text-darkGrayishBlue"><NavLink to="/about">About</NavLink></li>
                </ul>

                {/* Login Button */}
                <div className="px-11 hidden md:block">
                    <button className="inline-block rounded-lg px-3 py-1.5 font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 text-sm"><NavLink to="/login">Login</NavLink></button>
                </div>

                {/* Cheeseburger Menu */}
                <div onClick={handleNav} className='md:hidden pr-3'>
                    {!nav ? <XIcon className='w-8' /> : <MenuIcon className='w-8' />}

                </div>

                <div className={!nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-white md:hidden' :
                    'fixed left-[-100%] top-0 w-[70%] h-full border-r border-r-gray-900 bg-white md:hidden'}>
                    <h1 className="w-full text-3xl font-bold mx-6 mt-8 mb-2">Prescriptoken</h1>
                    <ul className='p-4 font-semibold'>
                        <li className="p-4 border-b border-gray-600"><NavLink to="/database">Patient Database</NavLink></li>
                        <li className="p-4 border-b border-gray-600"><NavLink to="/input">New Patient</NavLink></li>
                        <li className="p-4 border-b border-gray-600"><NavLink to="/features">Features</NavLink></li>
                        <li className="p-4 border-b border-gray-600"><NavLink to="/about">About</NavLink></li>
                        <li className="p-4">Log In</li>
                    </ul>

                </div>
            </div>



        </div>
    )
}
