import React, { useState } from 'react';
import TextArea from '../components/TextArea';
import ActionButton from '../components/ActionButton';
import Navbar from '../components/NavBar';
import LinkArea from '../components/Linkarea';
import axios from 'axios';


const Main = () => {
  const [input, setInput] = useState('');
  const [drag, setDrag] = useState(false);
  const [summarizedtext , setSummarizedtext] = useState("");
  const [loading ,setLoading] = useState(false);

  const handleInputChange = (e) =>{
    setInput(e.target.value);
  };

  const handleSubmit = async () =>{
    if(!input){ 
        alert('Please input text to summarize');
        return
    }
    setLoading(true);
    

    try{ 
    const response = await axios.post("https://ai-api.amalitech.org/api/v1/public/chat",
        {
            prompt: `Summarize this text: \n\n${input} \n\nSummary:`, 
            "stream": false
        },
        {
            headers: {
            
                'X-Api-Key': `${process.env.REACT_APP_X_API_KEY}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':"https://ai-api.amalitech.org/api/v1/public/chat".origin,
            },
        }
    );

    setSummarizedtext(response.data.data.content);

    }catch (error) {
        console.error('error generating summary:' ,error);
        if(error.response){
            console.error('response data:' ,error.response.data);
            console.error('response status',error.response.status);
        }else if(error.request){
            console.error('request data:' ,error.request);
        }else{
            console.error('error message:', error.message);
        }
    }finally{
        setLoading(false);
    }   
  };


  return (
    <div>
        <header>
            <Navbar />
            <div className='container-fluid text-center mt-5'>
                <h1 style={{color:'#1883B0'}}>Text Summarizer</h1>
                <h5 style={{color: '#726C6C'}}>Transform lengthy, complex information into concise, easy-to-understand summaries with just one click. 
                    Get clear insights from any text, instantly!</h5>
            </div>
        </header>

        <div className='container-fluid input-group link d-flex justify-content-center mt-5 mb-5'>
            <LinkArea  />
            <ActionButton text='Submit' onClick={handleSubmit} className='linkBtn px-4 py-1 rounded' />
        </div>

        <div className='container text-area rounded mb-5'>
            <div className='row d-flex align-items-start'>
                <div className='col-6 '>
                    <form className='mt-5 w-100 '>
                        <label className='mx-5 mt-5 mb-1'>Your Text</label>
                        <TextArea
                        placeholder='Type or drop a file here...'
                        input={input}
                        setInput={setInput}
                        drag={drag}
                        setDrag={setDrag}
                        onChange ={handleInputChange}
                        to ='/'
                        classname= 'd-flex flex-column pasteIcon'
                        imgSrc= '/assets/pasteIcon.svg'
                        alt = 'paste icon'
                        />
                    </form>
                    <ActionButton text='Summarize' onClick={handleSubmit}
                    className='sumBtn mx-5 my-4 w-75 rounded' />
                    {loading === true &&(
                        <p>Loading</p>
                    )}

                </div>
                <div className='col-6 d-flex flex-column mt-2 '>
                    <div className='paraBtn btn-group my-4 w-75 mx-5 ' role='group'>
                        <button
                        type='button'
                        className='btn btn-outline'
                        style={{ borderColor: 'gray', color: '#1883B0' }}>
                        Paragraph
                        </button>
                        <button
                        type='button'
                        className='btn btn-outline'
                        style={{ borderColor: 'gray', color: '#1883B0' }}>
                        Bullet
                        </button>
                    </div>
                    <label className='mb-1 mx-5'>Summary</label>
                    <textarea readOnly={true} className='input w-75 mx-5 rounded' 
                       placeholder='Summarized Text' value={summarizedtext}
                    />
                </div>
            </div>
        </div>
    </div>
  );
};
export default Main;