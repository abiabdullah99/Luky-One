import React from 'react';
import './Header.css'
import { BsSmartwatch } from 'react-icons/bs';
const Header = () => {
    return (
        <div className='Navbar'>
            <h1 className='nav-title'>Watch Store <BsSmartwatch size={40}/></h1>
            <p className='nav-text'>Take Out The Watch Of Your Choice</p>
        </div>
    );
};

export default Header;