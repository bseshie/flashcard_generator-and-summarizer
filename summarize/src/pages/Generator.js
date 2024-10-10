import React, { useState,useEffect,useRef } from 'react';
import TextArea from '../components/TextArea';
import ActionButton from '../components/ActionButton';
import Navbar from '../components/NavBar';
import LinkArea from '../components/Linkarea';
import ReactCardFlip from 'react-card-flip';
import axios from 'axios';



const Generator = () => {
  const [input, setInput] = useState('');
  const [drag, setDrag] = useState(false);
  const [isFlipped,setIsFlipped] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] =useState(0);
  const flashcardRef = useRef(null);
  const [loading ,setLoading] = useState(false);


  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setIsFlipped(!isFlipped);
  // };
  


  const generateFlashcards = async () => {

    setLoading(true);

    try {
      const response = await axios.post(
        'https://ai-api.amalitech.org/api/v1/public/chat',
        {
          prompt: `Generate flashcards for this text: \n\n${input} \n\nFlashcards:`, 
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

      const flashcardsContent = response.data.data.content;
      console.log(flashcardsContent);
      const flashcardArray = flashcardsContent.split("Flashcard").slice(1);

      const parsedFlashcards = flashcardArray.map(card =>{
        const [questionPart ,answerPart] = card.split("\nA:");
        const question = questionPart.trim().replace("Q:","");
        const answer = answerPart.trim();
        return { question, answer};
      });
      setFlashcards(parsedFlashcards); // Store the flashcards
      console.log("Parsed flashcards:", parsedFlashcards);
      
    } catch (error) {
      console.error('Error generating flashcards:', error);
    }finally{
      setLoading(false);

    }
  };
  const downloadFlashcards = () => {
    if (!flashcards.length) {
      alert('No flashcards to download!');
      return;
    }
    const flashcardContent = flashcards
      .map((flashcard, index) => `Flashcard ${index + 1}:\nQuestion: ${flashcard.question}\nAnswer: ${flashcard.answer}\n`)
      .join('\n');
    const blob = new Blob([flashcardContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'flashcards.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setIsFlipped(false); // Reset flip state for new card
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    setIsFlipped(false);
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() =>{
    if(flashcardRef.current){
      flashcardRef.current.scrollIntoView({behavior:'smooth',block:'start'});
    }
  },[flashcards]);

  
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
      <div className='container-fluid input-group link d-flex justify-content-center mt-5 mb-5'>
            <LinkArea  />
            <ActionButton text='Submit'  className='linkBtn px-4 py-1 rounded' />
        </div>
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
            className='genBtn my-4 rounded w-50'
            onClick={generateFlashcards}
            />
            {loading === true &&(
                        <p>Loading</p>
                    )}
        </div>

        {/* use react flip card component to simulate actual card flipping  */}
        
        <div className='mt-5 ' ref={flashcardRef}>
          {flashcards.length > 0 && (
            <div className='d-flex flex-column w-50 mx-auto'>
              <h5 className='gen fw-medium'>Flashcards</h5>
              <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
                {/* Front of the flashcard: Display the question */}
                <textarea
                  className='container-fluid inputTwo w-100 mb-5 rounded text-center card-front'
                  readOnly={true}  onClick={toggleFlip}
                  style={{fontWeight:"bold",resize:"none",fontSize:'30px',height:'14em',width:'1em'}}
                  value={flashcards[currentIndex]?.question || 'No question available'} // Display the question
                />
                {/* Back of the flashcard: Display the answer */}
                <textarea
                  className='container-fluid inputTwo w-100 mb-5 rounded text-center card-back'
                  readOnly={true}  onClick={toggleFlip}
                  style={{fontWeight:"bold",resize:"none",fontSize:'30px',height:'14em'}}
                  value={flashcards[currentIndex]?.answer || 'No answer available'} // Display the answer
                />
              </ReactCardFlip>
            </div>
          )}

            <div className='d-flex flex-row justify-content-center nextPrev bd-highlight mb-3'>
            {flashcards.length > 0 &&(
              <>
              <button className='prev py-2 px-4 mx-5 bd-highlight rounded' onClick={prevCard} >
                <img src='/assets/prevBtn.svg' alt='previous button' />
              </button>
              <button className='next py-2 px-3 mx-5 bd-highlight rounded' onClick={nextCard} >
                <img src='/assets/nextBtn.svg' alt='next button' />
              </button>
              <button className='dwnload py-2 px-3 mx-5 bd-highlight rounded' onClick={downloadFlashcards}>
                <img src='/assets/dwnload.svg' alt='download button' />
              </button>
              </>
              )}
            </div>
            
          
          </div>

      </section>
    </div>
  );
};
export default Generator;
