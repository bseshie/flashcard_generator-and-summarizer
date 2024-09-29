import React from 'react';
import Navbar from './NavBar';
import {LinkArea}  from './Main'

const Generator = () => {
    return(
        <div>
            <header>
                <Navbar />

            <div className='container-fluid text-center mt-5'>
                <h1 style={{color:'#1883B0'}}>AI Generated Flashcards</h1>
                <h5 style={{color: '#726C6C'}}> Generate flashcards instantly and supercharge your study sessions </h5>
            </div>
            </header>

            <section className='m-5'>
                <LinkArea />

                <div className='container-fluid d-flex flex-column align-items-center '>
                    <form className='w-100  d-flex justify-content-center'>
                        
                        <input placeholder='Type or paste here...' className='inputTwo w-50 mx-5 rounded' />
                    </form>
                    <button className='genBtn my-4 rounded w-50 '>Generate Flashcards</button>
                </div>


                <div className='mt-5 '>
                    <div className='d-flex flex-column align-items-start w-50 mx-auto'>
                        <h5 className='gen fw-medium'>Flashcards</h5>
                        <div className='container-fluid inputTwo w-100 mb-5 rounded '>
                            
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-center nextPrev bd-highlight mb-3">
                        <div className="prev py-2 px-4 mx-5 bd-highlight rounded">
                            <img src='/assets/prevBtn.svg' alt='previous button' />
                        </div>
                        <div className="next py-2 px-3 mx-5 bd-highlight rounded">
                            <img src='/assets/nextBtn.svg' alt='previous button' /> 
                        </div>
                        <div className="dwnload py-2 px-3 mx-5 bd-highlight rounded">
                            <img src='/assets/dwnload.svg' alt='previous button' />
                        </div>
                    </div>
                </div>
            </section>

            
        </div>
    );
};


export default Generator;