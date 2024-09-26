import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from './NavBar';

const Generator = () => {
    return(
        <body>
            <header>
                {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <img src='/assets/logo-book.png' alt='logo' className='navbar-img mx-5'/> 
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link className="nav-link" aria-current="page" 
                            to ='/' >Summarize Text</Link>
                            <Link class="nav-link active" to = '/cards' style={{color :'#1883B0'}}>Generate Flashcards</Link>
                        </div>
                        </div>
                    </div>
                </nav> */}
                <Navbar />

            <div className='container-fluid text-center mt-5'>
                <h1 style={{color:'#1883B0'}}>AI Generated Flashcards</h1>
                <h6 style={{color: '#726C6C'}}> Generate flashcards instantly and supercharge your study sessions </h6>
            </div>
            </header>

            <section className='m-5'>
                <div class="container-fluid input-group link d-flex justify-content-center mt-5 mb-5">
                    <input type="url" className="form-control me-3" placeholder='Paste the article link'  />
                    <button type='submit' className='linkBtn px-4 py-1'>Submit</button>
                </div>


                <form className='container-fluid d-flex justify-content-center'>
                    
                    <input placeholder='Type or paste here...' className='inputTwo w-50 mx-5 ' />
                </form>
                <button className='genBtn my-4 '>Generate Flashcards</button>
                
                <h6 className='gen'>Flashcards</h6>
                <div className='container-fluid inputTwo w-50 mb-5'>

                </div>

                <div class="d-flex flex-row justify-content-center nextPrev bd-highlight mb-3">
                    <div class="prev py-2 px-4 mx-5 bd-highlight">
                        <img src='/assets/prevBtn.svg' alt='previous button' />
                    </div>
                    <div class="next py-2 px-3 mx-5 bd-highlight">
                        <img src='/assets/nextBtn.svg' alt='previous button' /> 
                    </div>
                    <div class="dwnload py-2 px-3 mx-5 bd-highlight">
                        <img src='/assets/dwnload.svg' alt='previous button' />
                    </div>
                </div>
            </section>

            
        </body>
    );
};


export default Generator;