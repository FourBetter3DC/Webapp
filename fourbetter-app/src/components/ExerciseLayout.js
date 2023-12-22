import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import raw from '../assets/LHC.txt';
import raw1 from '../assets/chroniclesOfNarnia.txt';
import raw2 from '../assets/jamesAndTheGiantPeach.txt';
import raw3 from '../assets/stuartLittle.txt';

const TextDisplay = () => {
    const [text, setText] = useState("");
    const TextID = useParams().textID;
    var selected;
    if (TextID == 1){selected=raw}
    else if(TextID == 2){selected=raw1}
    else if(TextID == 3){selected=raw2}
    else{selected=raw3}
  
    useEffect(() => {
      fetch(selected)
      .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then(text => {
          setText(text);
        })
        .catch(error => {
          console.error('Error fetching the file:', error);
        });
    }, []);
    console.log("The ID we want")
    console.log(TextID);
    console.log('/exercises/'+TextID+'/challenges/1')
    return <div style={{ overflow: 'auto', height: 'calc(100% - 40px)' }}>{text}</div>;
  };
  

/*function ExerLayout() {
    const {textID} = useParams();
    const text = {textID, textcontent:"whee this is all the content of the text", questions:["This is question 1","This is question 2","This is question 3."]};
    return (
        <div>The layout for text {textID} has been printed.
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <p>{text.textcontent}</p>
            <br/>
            <br/>
            <a href= {/exercises/+{textID}+/challenges/+1}>
                <button>To Challenges Page</button>
            </a>
          </div>
        </div>
        
    )
}*/
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
      <div className="chatbot-popup" style={{ width: '300px', border: '1px solid #ccc', padding: '10px', position: 'fixed', bottom: '80px', right: '750px', backgroundColor: '#fff' }}>
        <h3>ChatBot</h3>
        <div style={{ height: '200px', overflowY: 'auto', marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
          {messages.map((message, index) => (
            <div key={index} style={{ marginBottom: '5px' }}>
              {message.sender === 'user' ? 'You: ' : 'ChatBot: '}{message.text}
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
  
  const HelpButton = () => {
    const [showChatbot, setShowChatbot] = useState(false);
  
    const toggleChatbot = () => {
      setShowChatbot(!showChatbot);
    };
  
    return (
      <div style={{ position: 'relative' }}>
        <button className="button help-button" onClick={toggleChatbot}>
          Help
        </button>
        <img
          src="https://i0.wp.com/www.followchain.org/wp-content/uploads/2023/05/icons8-cute-hamster-330.png?w=50&ssl=1" // Replace with your hamster image URL
          alt="Hamster"
          style={{
            position: 'absolute',
            top: '-50px', // Adjust the position of the image relative to the button
            left: '1.6%', // Adjust the left position if needed
            transform: 'translateX(-50%)', // Center the image horizontally
            width: '50px', // Adjust the width as needed
            height: 'auto', // Maintain aspect ratio
          }}
        />
        {showChatbot && <ChatBot onClose={toggleChatbot} />} {/* Render ChatBot if showChatbot is true */}
      </div>
    );
  };
  
  const BoxComponent = () => {
    const [showChatbot, setShowChatbot] = useState(false);
    const TextID  = useParams().textID;
  
    const containerStyle = {
      position: 'relative',
      width: '80%', // Adjust width as needed to fill most of the page
      height: '80vh', // Adjust height as needed to fill most of the page
      border: '1px solid #000',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      margin: 'auto',
    };
  
    const buttonStyle = {
      position: 'absolute',
      bottom: '10px',
      padding: '5px 10px',
      border: '1px solid #000',
      cursor: 'pointer',
    };
  
    const nextButtonStyle = {
      ...buttonStyle,
      right: '10px',
    };
  
    const toggleChatbot = () => {
      setShowChatbot(!showChatbot);
    };
  
    return (
      <div style={containerStyle}>
        {<TextDisplay />}
        <a href= {/exercises/+TextID+/challenges/}>
        <button style={nextButtonStyle}>Challenge</button>
        </a>
        <HelpButton />
        {showChatbot && <ChatBot onClose={toggleChatbot} />} {/* Render ChatBot if showChatbot is true */}
      </div>
    );
  };
  
  export default BoxComponent;
  