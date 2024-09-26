import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from './NavBar';




const Main = () => {
    return(
        <body>
            <header>
                {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <img src='/assets/logo-book.png' alt='logo' className='navbar-img mx-5'/> 
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link className="nav-link active" aria-current="page" 
                            to ='/' style={{color :'#1883B0'}}>Summarize Text</Link>
                            <Link class="nav-link" to = '/cards'>Generate Flashcards</Link>
                        </div>
                        </div>
                    </div>
                </nav> */}
                <Navbar />
            <div className='container-fluid text-center mt-5'>
                <h1 style={{color:'#1883B0'}}>Text Summarizer</h1>
                <h6 style={{color: '#726C6C'}}>Transform lengthy, complex information into concise, easy-to-understand summaries with just one click. 
                    Get clear insights from any text, instantly!</h6>
            </div>
            </header>

            <section className='m-5'>
                <div class="container-fluid input-group link d-flex justify-content-center mt-5 mb-5">
                    <input type="url" className="form-control me-3" placeholder='Paste the article link'  />
                    <button type='submit' className='linkBtn px-4 py-1'>Submit</button>
                </div>


                <div className='container text-area'>
                <div className="paraBtn btn-group my-4 " role="group">
                    <button type="button" className="btn btn-outline" style={{borderColor: '#1883B0', color: '#1883B0'}}>Paragraph</button>
                    <button type="button" className="btn btn-outline" style={{borderColor: '#1883B0', color: '#1883B0'}}>Bullet Points</button>
                </div>

                
                    <div className="row ">
                        <div className="col-6">
                            <form className=''>
                                <label className='mx-5'>Your Text</label>
                                <input placeholder='Type or paste here...' className='input w-75 mx-5 ' />
                            </form>
                            
                        </div>
                        <div className="col-6 ">
                            <label className='mx-5'>Summary</label>
                            <div className='input w-75 mx-5'>
                                
                            </div>
                        </div>
                        
                    </div>
                    <button className='sumBtn mx-5 my-4 '>Summarize</button>
                </div>

                
            </section>
        </body>
    );

    
};


export default Main;