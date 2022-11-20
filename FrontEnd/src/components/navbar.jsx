import React from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import logo from '../assets/logo.svg';

export const Navbar = () => {
    return (
        <div className='relative container mx-auto pb-6'>
            <div className='flex items-center justify-between'>
                {/* Logo */}
                <div class="pt-2">
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
                <div className="px-2">
                    <button className="hover:ring-gray-900/20 text-sm">Login</button>
                </div>
            </div>
        </div>
    )
}
    