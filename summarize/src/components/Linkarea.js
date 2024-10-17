import React from 'react';


const LinkArea = () => {
    
    return (
            <input type="url"  className="form-control me-3 rounded-end" placeholder='Paste the article link'  />
    );
}

export default LinkArea;



// import React, { useState } from 'react'; 
// import axios from 'axios'; 


// const LinkArea = ({ onLinksExtracted }) => { 
//     const [linkInput, setLinkInput] = useState(''); 
//     const [links, setLinks] = useState([]); 
//     const [error, setError] = useState(null); 

//     const handleLinkInputChange = (e) => { 
//         setLinkInput(e.target.value); 
//     }; 
    
//     const handleAddLink = () => { 
//         if (linkInput) { setLinks((prevLinks) => [...prevLinks, linkInput]); 
//             setLinkInput(''); 
//         } 
//         }; 
//     const handleExtractContent = async () => { 
//         if (links.length === 0) { 
//             alert('Please add at least one link.'); 
//             return; 
//         } 
//         setError(null); // Clear previous errors try { // For testing, let's use a publicly accessible API for demo purposes. 
        
//         try{
//             const link = links[0]; // We'll fetch from the first link for now 
//             const response = await axios.get(link); 
//             const content = response.data; 
//             onLinksExtracted(content); // Pass the content to the parent component 
//             } catch (error) { 
//                 setError('Error fetching content from the link'); 
//                 console.error('Error:', error); 
//             } 
//     }; 


//                 return ( 
//                 <div className="link-area"> <input type="text" placeholder="Enter URL" value={linkInput} 
//                 onChange={handleLinkInputChange} className="form-control" /> 
//                 <button onClick={handleAddLink} className="btn btn-primary mt-2"> Add Link </button> 
//                 <button onClick={handleExtractContent} className="btn btn-success mt-2 ml-2"> Extract Content </button>

//                 {error && <p style={{ color: 'red' }}>{error}</p>} 
//                 <div className="link-list mt-3"> 
//                     {links.length > 0 && <h5>Links to Process:</h5>} 
//                 <ul> 
//                     {links.map((link, index) => ( 
//                         <li key={index}>{link}</li> ))} 
//                 </ul> 
//             </div> 
//         </div> 
// );
// }; 
                
// export default LinkArea;