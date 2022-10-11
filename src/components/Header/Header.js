import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='bg-black py-3 flex justify-between items-center px-5'>
                <p className="text-2xl font-bold text-white">
                    LOGO
                </p>
                <div>
                    <Link className='text-white text-xl font-bold uppercase ml-3' to='/'>Home</Link>
                    <Link className='text-white text-xl font-bold uppercase ml-3' to='/orders'>Orders</Link>
                    <Link className='text-white text-xl font-bold uppercase ml-3' to='/about'>About</Link>
                    <Link className='text-white text-xl font-bold uppercase ml-3' to='/grandfather'>Grandfather</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;