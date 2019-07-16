import React from 'react';
import NavTab from './NavTab';

const NavBar = () => {
    return (
        <div>
            <NavTab to='/about' label='about' />
            <NavTab to='/resume' label='Resume' />
            <NavTab to='/projects' label='Projects' />
            <NavTab to='/contact' label='Contact' />
        </div>
    );
};

export default NavBar;