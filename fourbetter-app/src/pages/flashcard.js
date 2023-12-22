import React, { useState } from 'react';

const Flashcard = ({ flashcards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setIsFlipped(false); // Reset flip state when switching cards
  };

  const handlePrevCard = () => {
    const newIndex = currentCardIndex - 1 < 0 ? flashcards.length - 1 : currentCardIndex - 1;
    setCurrentCardIndex(newIndex);
    setIsFlipped(false); // Reset flip state when switching cards
  };

  const { word, definition } = flashcards[currentCardIndex];

  return (
    <div
      className="flashcard-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Ensure the container takes up the full viewport height
        position: 'relative',
      }}
    >
      <div
        className="flashcard"
        style={{
          width: '800px', // Make the flashcard wider
          height: '400px', // Maintain the height or adjust as needed
          perspective: '1000px',
          position: 'relative',
          cursor: 'pointer',
          border: '1px solid #ccc',
          borderRadius: '5px',
          marginBottom: '20px', // Add margin at the bottom for the buttons
        }}
        onClick={handleCardClick}
      >
        <div
          className="front"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
            backfaceVisibility: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            transition: 'transform 0.6s',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          <h3 style={{ fontSize: '24px' }}>Word</h3>
          <p style={{ fontSize: '18px' }}>{word}</p>
        </div>
        <div
          className="back"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
            backfaceVisibility: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            transition: 'transform 0.6s',
            transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(-180deg)',
          }}
        >
          <h3 style={{ fontSize: '24px' }}>Definition</h3>
          <p style={{ fontSize: '18px' }}>{definition}</p>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '20px', // Position the buttons at the bottom
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          paddingLeft: '20px', // Add padding to separate buttons from edges
          paddingRight: '20px',
        }}
      >
        <button
          onClick={handlePrevCard}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Back
        </button>
        <button
          onClick={handleNextCard}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const flashcards = [
    { word: "Question 1", definition: "Answer 1" },
    { word: "Question 2", definition: "Answer 2" },
    // Add more flashcards here
  ];

  return (
    <div>
      <Flashcard flashcards={flashcards} />
    </div>
  );
};

export default App;
