// import React ,{useState} from 'react';
// import Navbar from './NavBar';
// import {LinkArea}  from './Main'

// const TextSummarizer = () => {
//     const [input, setInput] = useState("");
//     const [drag,setDrag] = useState(false);



//     const handleDragOver = (e) =>{
//         e.preventDefault();
//         setDrag(true);
//     };

//     const handleLeave = (e) => {
//         e.preventDefault();
//         setDrag(false);
//     };

//     const handleDrop = (e) =>{
//         e.preventDefault();
//         setDrag(false);

//         // const data = e.dataTransfer.getData('Text');
//         // if(data){
//         //     setInput(data);
//         // }else if(e.dataTransfer.files.length > 0){
//         //     const file = e.dataTransfer.files[0];
//         //     if(file.type === "text/plain"){
//         //         const reader = new FileReader();
//         //         reader.onload = (e) => {
//         //             setInput(e.target.result);
//         //             };
//         //             reader.readAsText(file);
//         //     }else {
//         //         alert("Please drop a text file!")
//         //     }
//         // }

//         const droppedFiles = Array.from(e.dataTransfer.files);

       
//         if(droppedFiles.length > 0){
//             droppedFiles.forEach(file =>{
//             if(file.type === "text/plain"){
//                 const reader = new FileReader();
//                 reader.onload = (e) => {
//                     setInput(e.target.result);
//                     };
//                     reader.readAsText(file);
//             }else {
//                 alert("Please drop a text file!")
//             }
//         });
//         }
//     };

//     const handleFileUpload = (e) =>{
//         const file =e.target.files[0];
//         if(file && file.type === "text/plain"){
//             const reader = new FileReader();
//             reader.onload =(e) => {
//                 setInput(e.target.result);
//             };
//             reader.readAsText(file);
//         }else{
//             alert("Please select a text file!")
//         }
//     };


//     // if user types manually
//     const handleChange = (e) => {
//         setInput(e.target.value);
//     };
    
    
    

//     return(
        
//         <div className='container-fluid d-flex flex-column align-items-center '>
//                     <form className='w-100  d-flex justify-content-center'>
                        
//                         <textarea placeholder='Type or drop a file here...' 
//                         className= {`inputTwo w-50 mx-5  rounded ${drag ? 'drag' : ''}`} 
//                         type='text' value={input}
//                         onChange={handleChange} 
//                         onDragOver={handleDragOver}
//                         onDragLeave={handleLeave}
//                         onDrop={handleDrop} 
//                         />

//                         {!input && !drag && (
//                             <div className='d-flex flex-column pasteicon '>
//                             <img className='img-fluid'
//                             src='/assets/pasteIcon.svg' alt='paste icon' />
//                             <input type='file' accept='.txt' onChange={handleFileUpload}  />
//                             </div>
//                         )}
//                     </form>
//                     <button className='genBtn my-4 rounded w-50 '>Generate Flashcards</button>
//                 </div>

//     );

    
       
// };


// const Generator = () => {
//     return(
//         <div>
//             <header>
//                 <Navbar />

//             <div className='container-fluid text-center mt-5'>
//                 <h1 style={{color:'#1883B0'}}>AI Generated Flashcards</h1>
//                 <h5 style={{color: '#726C6C'}}> Generate flashcards instantly and supercharge your study sessions </h5>
//             </div>
//             </header>


            
//             <section className='m-5'>
//                 <LinkArea />

//                 <TextSummarizer />

//                 <div className='mt-5 '>
//                     <div className='d-flex flex-column align-items-start w-50 mx-auto'>
//                         <h5 className='gen fw-medium'>Flashcards</h5>
//                         <div className='container-fluid inputTwo w-100 mb-5 rounded '>
                            
//                         </div>
//                     </div>
//                     <div className="d-flex flex-row justify-content-center nextPrev bd-highlight mb-3">
//                         <div className="prev py-2 px-4 mx-5 bd-highlight rounded">
//                             <img src='/assets/prevBtn.svg' alt='previous button' />
//                         </div>
//                         <div className="next py-2 px-3 mx-5 bd-highlight rounded">
//                             <img src='/assets/nextBtn.svg' alt='previous button' /> 
//                         </div>
//                         <div className="dwnload py-2 px-3 mx-5 bd-highlight rounded">
//                             <img src='/assets/dwnload.svg' alt='previous button' />
//                         </div>
//                     </div>
//                 </div>
                
//             </section>

            
//         </div>
//     );
// };


// export default Generator;





import React, { useState } from 'react';
import TextArea from '../components/TextArea';
import ActionButton from '../components/ActionButton';
import Navbar from '../components/NavBar';
import LinkArea from '../components/Linkarea';


const Generator = () => {
  const [input, setInput] = useState('');
  const [drag, setDrag] = useState(false);

  
  return (
    <div>
      <header>
        <Navbar />
        <div className='container-fluid text-center mt-5'>
          <h1 style={{ color: '#1883B0' }}>AI Generated Flashcards</h1>
          <h5 style={{ color: '#726C6C' }}>
            Generate flashcards instantly and supercharge your study sessions
          </h5>
        </div>
      </header>
      


      <section className='m-5'>
      <LinkArea />
        <div className='container-fluid d-flex flex-column align-items-center'>
          <form className='w-100  d-flex justify-content-center'>
              <TextArea
                placeholder='Type or drop a file here...'
                input={input}
                setInput={setInput}
                drag={drag}
                setDrag={setDrag}
                to = '/cards'
                classname= 'd-flex flex-column pasteicon'
                imgSrc= '/assets/pasteIcon.svg'
                alt = 'paste icon'
              />
              
          </form>
          <ActionButton
            text='Generate Flashcards'
            className='genBtn my-4 rounded w-50'/>
        </div>

        {/* use react flip card component to simulate actual card flipping  */}
        <div className='mt-5 '>
          <div className='d-flex flex-column align-items-start w-50 mx-auto'>
            <h5 className='gen fw-medium'>Flashcards</h5>
            <div className='container-fluid inputTwo w-100 mb-5 rounded'></div>
          </div>
          <div className='d-flex flex-row justify-content-center nextPrev bd-highlight mb-3'>
            <div className='prev py-2 px-4 mx-5 bd-highlight rounded'>
              <img src='/assets/prevBtn.svg' alt='previous button' />
            </div>
            <div className='next py-2 px-3 mx-5 bd-highlight rounded'>
              <img src='/assets/nextBtn.svg' alt='next button' />
            </div>
            <div className='dwnload py-2 px-3 mx-5 bd-highlight rounded'>
              <img src='/assets/dwnload.svg' alt='download button' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Generator;
