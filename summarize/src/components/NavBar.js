import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');
    const navigate = useNavigate();

    function handleClick(e, linkname , path){
        e.preventDefault();
        setActiveLink(linkname);
        navigate(path)
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <img src='/assets/logo-book.png' alt='logo' className='navbar-img mx-5'/> 
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" aria-current="page"
                            to ='/' style={{color: activeLink === 'home' ? '#1883B0' : 'gray'}} 
                            onClick={(e) => handleClick(e,'home' ,'/')}>Summarize Text</Link>
                            <Link className="nav-link" to = '/cards' style={{color: activeLink === 'cards' ? '#1883B0' : 'gray'}}
                             onClick={ (e) => handleClick(e,'cards' ,'/cards')} >Generate Flashcards</Link>
                        </div>
                        </div>
                    </div>
                </nav>
    );
}

export default Navbar; 
