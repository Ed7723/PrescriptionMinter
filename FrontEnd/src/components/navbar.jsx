import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='relative container mx-auto pb-6'>
            <div className='flex items-center justify-between'>
                {/* Logo */}
                <div className="pt-2">
                    <img className="object-cover h-40 w80" src={logo} alt="" />
                </div>

                {/* Menu Items */}
                <ul className="hidden space-x-10 md:flex">
                    <li className="font-semibold hover:text-darkGrayishBlue">Patient Database</li>
                    <li className="font-semibold hover:text-darkGrayishBlue">New Patient</li>
                    <li className="font-semibold hover:text-darkGrayishBlue">Drug Database</li>
                    <li className="font-semibold hover:text-darkGrayishBlue">Features</li>
                </ul>

                {/* Login Button */}
                <div className="px-2 hidden md:block">
                    <button className="inline-block rounded-lg px-3 py-1.5 font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 text-sm">Login</button>
                </div>

                {/* Cheeseburger Menu */}
                <div onClick={handleNav} className='md:hidden'>
                    {!nav ? <XIcon className='w-8' /> : <MenuIcon className='w-8' />}

                </div>

                <div className={!nav ? 'fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-white' : 'fixed left-[-100%] top-0 w-[70%] h-full border-r border-r-gray-900 bg-white'}>
                    <h1 className="w-full text-3xl font-bold mx-6 mt-8 mb-2">Prescriptoken</h1>
                    <ul className='p-4 font-semibold'>
                        <li className="p-4 border-b border-gray-600">Patient Database</li>
                        <li className="p-4 border-b border-gray-600">New Patient</li>
                        <li className="p-4 border-b border-gray-600">Drug Database</li>
                        <li className="p-4 border-b border-gray-600">Features</li>
                        <li className="p-4">Log In</li>

                    </ul>

                </div>
            </div>



        </div>
    )
}
