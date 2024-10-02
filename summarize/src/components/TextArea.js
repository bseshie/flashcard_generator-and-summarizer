import React from 'react';


const TextArea = ({ placeholder, input, setInput, drag, setDrag, to = '/', classname, imgSrc, imgAlt}) => {
  const handleDragOver = (e) => {
    e.preventDefault();
    setDrag(true);
  };
  const handleLeave = (e) => {
    e.preventDefault();
    setDrag(false);
  };
  const handleDrop = (e) => {
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

  //if user types manually
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  
  return (

    <>
    <textarea
      placeholder={placeholder}
      className={ to === '/' 
      ? `input w-75 mx-5 rounded ${drag ? 'drag' : ''}`
      : `inputTwo w-50 mx-5 rounded ${drag ? 'drag' : ''}`
      }
      type='text'
      value={input}
      onChange={handleChange}
      onDragOver={handleDragOver}
      onDragLeave={handleLeave}
      onDrop={handleDrop}
    />
    
    {!input && !drag && (
      <div className={classname}>
        <img className='img-fluid'
        src={imgSrc} alt={imgAlt} />
        <input type='file' accept='.txt' onChange={handleFileUpload}  />
      </div>
    )}
    </>

    
  );
};
export default TextArea;