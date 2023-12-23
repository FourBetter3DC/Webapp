import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import raw from '../assets/LHC.txt';
import raw1 from '../assets/chroniclesOfNarnia.txt';
import raw2 from '../assets/jamesAndTheGiantPeach.txt';
import raw3 from '../assets/stuartLittle.txt';
const gen = require('./gen.js');

/*function ChallengeLayout(){
    const {textID, challengeNum} = useParams();
    const questions = ["This is question 1","This is question 2","This is question 3.", "This is question 4.", "This is question 5."];

    console.log('TextID');
    console.log(textID);
    console.log("challengeNum");
    console.log(challengeNum);
    console.log(challengeNum == 1)

    if(challengeNum == 1){
    const nextchallengeNum = parseInt(challengeNum) + 1;
    console.log(nextchallengeNum);
    return (
        <div>
            <h2>This is the challenges layout number {challengeNum} for text {textID}</h2>
            <p>Right now, all you can do is see the questions</p>
            <br/>
            {questions[challengeNum-1]}
            <br />
            <br />
            <a href= {/exercises/+textID+/challenges/+nextchallengeNum}>
                <button>Next question</button>
            </a>
            <br />
            <a href= {/exercises/+textID}>
                <button>Back to the Text Page</button>
            </a>
        </div>
    )}
    else if(challengeNum <= 4){
        console.log('Im here now');
        const prevchallengeNum = parseInt(challengeNum) - 1;
        const nextchallengeNum = parseInt(challengeNum) + 1;
        return(
        <div>
            <h2>This is the challenges layout number {challengeNum} for text {textID}</h2>
            <p>Right now, all you can do is see the questions</p>
            <br/>
            {questions[challengeNum-1]}
            <br/>
            <br />
            <a href= {/exercises/+textID+/challenges/+prevchallengeNum}>
                <button>Previous question</button>
            </a>
            <br />
            <a href= {/exercises/+textID+/challenges/+nextchallengeNum}>
                <button>Next question</button>
            </a>
            <br />
            <a href= {/exercises/+textID}>
                <button>Back to the Text Page</button>
            </a>
        </div>)
    }

    else{
        const prevchallengeNum = parseInt(challengeNum) - 1;
        return(
        <div>
            <h2>This is the challenges layout number {challengeNum} for text {textID}</h2>
            <p>Right now, all you can do is see the questions</p>
            <br/>
            {questions[challengeNum-1]}
            <br />
            <br />
            <a href= {/exercises/+textID+/challenges/+prevchallengeNum}>
                <button>Previous question</button>
            </a>
            <br />
            <a href= {/exercises/+textID}>
                <button>Back to the Text Page</button>
            </a>
        </div>
    )}
} */

const ChatBot = ({ onClose }) => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim() !== '') {
        setMessages([...messages, { text: inputValue, sender: 'user' }]);
        setInputValue('');
        // Implement your chatbot logic here to handle user messages
      }
    };
  
    return (
      <div className="chatbot-popup" style={{ width: '300px', border: '1px solid #ccc', padding: '10px', position: 'fixed', bottom: '80px', right: '900px', backgroundColor: '#fff' }}>
        <h3>ChatBot</h3>
        <div style={{ height: '200px', overflowY: 'auto', marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
          {messages.map((message, index) => (
            <div key={index} style={{ marginBottom: '5px' }}>
              {message.sender === 'user' ? 'You: ' : 'ChatBot: '}{message.text}
              {message.receiver === 'bot'}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type something..."
            value={inputValue}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', fontSize: '16px', marginBottom: '5px' }}
          />
          <button type="submit" style={{ width: '100%', padding: '8px', fontSize: '16px' }}>Send</button>
        </form>
        <button onClick={onClose} style={{ marginTop: '10px' }}>Close</button>
      </div>
    );
  };
  
  const HelpButton = ({ onClick }) => {
    return (
      <div style={{ position: 'fixed', bottom: '20px', left: '20px' }}>
        <button className="button help-button" onClick={onClick}>
          Help
        </button>
      </div>
    );
};



const BoxComponent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [showChatBot, setShowChatBot] = useState(false);

    const {textID, challengeNum} = useParams();
    var selected;
    if (textID == 1){selected=raw}
    else if(textID == 2){selected=raw1}
    else if(textID == 3){selected=raw2}
    else{selected=raw3}
    fetch(selected)
    .then((res) => {
        selected = res.text
    })
    
    const questions = gen.caller(1, 5, selected)
    
    

    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '80%',
      height: '80vh',
      border: '1px solid #000',
      padding: '20px',
      margin: 'auto',
      position: 'relative',
    };
  
    const progressBarStyle = {
      position: 'absolute',
      top: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
  
    const dotStyle = {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      margin: '0 5px',
      backgroundColor: '#ccc',
      cursor: 'pointer',
    };
  
    const activeDotStyle = {
      backgroundColor: '#000',
    };
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    const handleNext = () => {
      setCurrentPage((prevPage) => (prevPage < 5 ? prevPage + 1 : prevPage));
    };
  
    const toggleChatBot = () => {
      setShowChatBot((prevState) => !prevState);
    };


    return (
      <div style={containerStyle}>
        <div style={progressBarStyle}>
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              style={{
                ...dotStyle,
                ...(currentPage === index + 1 ? activeDotStyle : {}),
              }}
              onClick={() => handlePageChange(index + 1)}
            />
          ))}
        </div>
  
        {/* Text and Text box for each page */}
        {currentPage === 1 && (
          <React.Fragment>
            <br/>
            <div style={{ overflow: 'auto', height: 'calc(50% - 40px)' }}>
              {questions[0]}
            </div>
            <div style={{ overflow: 'auto', height: 'calc(50% - 50px)', display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                placeholder="Type something..."
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              />
            </div>
          </React.Fragment>
        )}
        {currentPage === 2 && (
          <React.Fragment>
            <br/>
            <div style={{ overflow: 'auto', height: 'calc(50% - 40px)' }}>
              {questions[1]}
            </div>
            <div style={{ overflow: 'auto', height: 'calc(50% - 50px)', display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                placeholder="Type something..."
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              />
            </div>
          </React.Fragment>
        )}
        {currentPage === 3 && (
          <React.Fragment>
            <br/>
            <div style={{ overflow: 'auto', height: 'calc(50% - 40px)' }}>
              {questions[2]}
            </div>
            <div style={{ overflow: 'auto', height: 'calc(50% - 50px)', display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                placeholder="Type something..."
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              />
            </div>
          </React.Fragment>
        )}
        {currentPage === 4 && (
          <React.Fragment>
            <br/>
            <div style={{ overflow: 'auto', height: 'calc(50% - 40px)' }}>
              {questions[3]}
            </div>
            <div style={{ overflow: 'auto', height: 'calc(50% - 50px)', display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                placeholder="Type something..."
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              />
            </div>
          </React.Fragment>
        )}
        {currentPage === 5 && (
          <React.Fragment>
            <br/>
            <div style={{ overflow: 'auto', height: 'calc(50% - 40px)' }}>
              {questions[4]}
            </div>
            <div style={{ overflow: 'auto', height: 'calc(50% - 50px)', display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                placeholder="Type something..."
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              />
            </div>
          </React.Fragment>
        )}
  
        {/* Help button */}
        <HelpButton onClick={toggleChatBot} />
  
        {/* Hamster image */}
        <img
          src="https://i0.wp.com/www.followchain.org/wp-content/uploads/2023/05/icons8-cute-hamster-330.png?w=50&ssl=1"
          alt="Hamster"
          style={{
            position: 'fixed',
            bottom: '35px',
            left: '12.5px',
            width: '50px',
            height: 'auto',
          }}
        />

        {/* Next button */}
        <button style={{ position: 'fixed', bottom: '10px', right: '10px', padding: '5px 10px', border: '1px solid #000', cursor: 'pointer' }} onClick={handleNext}>Next</button>
  
        {/* ChatBot component */}
        {showChatBot && <ChatBot onClose={toggleChatBot} />}
      </div>
    );
};
  
export default BoxComponent;