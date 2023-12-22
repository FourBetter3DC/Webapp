import React from 'react';

const HamsterWithSpeechBubble = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', padding: '20px' }}>
      <img
        src="https://i0.wp.com/www.followchain.org/wp-content/uploads/2023/05/icons8-cute-hamster-330.png?w=330&ssl=1"
        alt="Hamster"
        style={{
          position: 'absolute',
          bottom: '50px', // Adjust space between hamster and speech bubble
          left: '20px', // Adjust distance from the left
          width: '300px', // Adjust the width as needed
          height: 'auto', // Maintain aspect ratio
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '300px', // Adjust to position the base of the speech bubble above the hamster
          left: '350px', // Adjust distance from the left
          padding: '100px',
          backgroundColor: '#ddd5f3',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px', // Adjust maximum width of speech bubble
        }}
      >
        <p style={{ margin: 0, fontSize: '25px'}}>
          Good Job!
          You got 3/5!
        </p>
      </div>
      <button
        style={{
          position: 'absolute',
          bottom: '70px',
          right: '20px',
          padding: '10px 20px',
          backgroundColor: '#3f51b5',
          color: '#fff',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={() => {
          // Add functionality for the back button (e.g., navigate to the previous page)
          // For example: window.history.back();
        }}
      >
        Back
      </button>
    </div>
  );
};

export default HamsterWithSpeechBubble;
