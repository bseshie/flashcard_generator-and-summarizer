import Navbar from './NavBar';
import React, { useState } from 'react';


const TextSummarizer = () => {
    const [input, setInput] = useState("");
    const [drag,setDrag] = useState(false);
    


    const handleDragOver = (e) =>{
        e.preventDefault();
        setDrag(true);
    };

    const handleLeave = (e) => {
        e.preventDefault();
        setDrag(false);
    };

    const handleDrop = (e) =>{
        e.preventDefault();
        setDrag(false);

        const droppedFiles = Array.from(e.dataTransfer.files);

       
        if(droppedFiles.length > 0){
            droppedFiles.forEach(file =>{
            if(file.type === "text/plain"){
                const reader = new FileReader();
                reader.onload = (e) => {
                    setInput(e.target.result);
                    };
                    reader.readAsText(file);
            }else {
                alert("Please drop a text file!")
            }
        });
        }
    };

    const handleFileUpload = (e) =>{
        const file =e.target.files[0];
        if(file && file.type === "text/plain"){
            const reader = new FileReader();
            reader.onload =(e) => {
                setInput(e.target.result);
            };
            reader.readAsText(file);
        }else{
            alert("Please select a text file!")
        }
    };

    // if user types manually
    const handleChange = (e) => {
        setInput(e.target.value);
    };
    
    
    

    return(
        <div className='container text-area rounded '>
            <div className="row d-flex align-items-start">
                <div className="col-6 ">
                    <form className='mt-5 w-100 '>
                        <label className='mx-5 mt-5 mb-1'>Your Text</label>

                            <textarea placeholder='Type or drop a text file here...'  
                            className={`input w-75 mx-5  rounded ${drag ? 'drag' : ''}`}
                                type='text' value={input}
                                onChange={handleChange} 
                                onDragOver={handleDragOver}
                                onDragLeave={handleLeave}
                                onDrop={handleDrop} 
                                /> 
                            
                            
                            {!input && !drag && (
                                <div className='d-flex flex-column pasteIcon '>
                                <img className='img-fluid'
                                src='/assets/pasteIcon.svg' alt='paste icon' />
                                <input type='file' accept='.txt' onChange={handleFileUpload}  />
                                </div>
                            )}
                    </form>
                    <button className='sumBtn mx-5 my-4  w-75 rounded'>Summarize</button>
                </div>
            
                <div className="col-6 d-flex flex-column mt-2 ">
                    <div className="paraBtn btn-group my-4 w-75 mx-5  " role="group">
                        <button type="button" className="btn btn-outline" style={{borderColor: 'gray', color: '#1883B0'}}>Paragraph</button>
                        <button type="button" className="btn btn-outline" style={{borderColor: 'gray', color: '#1883B0'}}>Bullet </button>
                    </div>
                    <label className='mb-1 mx-5'>Summary</label>
                    <div className='input w-75 mx-5 rounded'>
                        
                    </div>
                </div>
                
                

            </div>
            
        </div>

    

    );

    
       
};


//move link area logic to Linkarea.js
export const LinkArea = () => {
    return (
        <div class="container-fluid input-group link d-flex justify-content-center mt-5 mb-5">
            <input type="url" accept='url' className="form-control me-3 rounded-end"
             placeholder='Paste the article link' pattern='https://.*' size= '30'  />
            <button type='submit' className='linkBtn px-4 py-1 rounded'>Submit</button>
        </div>
    );
}


const Main = () => {
    return(
        <div>
            <header>
                <Navbar />
                <div className='container-fluid text-center mt-5'>
                    <h1 style={{color:'#1883B0'}}>Text Summarizer</h1>
                    <h5 style={{color: '#726C6C'}}>Transform lengthy, complex information into concise, easy-to-understand summaries with just one click. 
                        Get clear insights from any text, instantly!</h5>
                </div>
            </header>

            <section className='m-5'>
                <LinkArea />

                <TextSummarizer />
                

                
            </section>
        </div>
    );

    
};


export default Main;




