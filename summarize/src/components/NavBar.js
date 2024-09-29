import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img src='/assets/logo-book.png' alt='logo' className='navbar-img mx-5' />
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink 
                            className="nav-link" 
                            to='/' 
                            style={({ isActive }) => ({ color: isActive ? '#1883B0' : 'gray' })}
                            aria-current={({ isActive }) => isActive ? 'page' : undefined}>
                            Summarize Text
                        </NavLink>
                        <NavLink 
                            className="nav-link" 
                            to='/cards' 
                            style={({ isActive }) => ({ color: isActive ? '#1883B0' : 'gray' })}
                            aria-current={({ isActive }) => isActive ? 'page' : undefined}>
                            Generate Flashcards
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
