import React, { useState } from 'react';
import addWordDefinition from '../firebase/WordUpload'; // Replace with the correct file path

const AddWordForm = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const userId = 'userID'; // Replace 'userID' with the actual user ID

  const handleAddWord = async () => {
    if (word && definition) {
      const data = {
        word,
        definitions: definition,
      };

      try {
        await addWordDefinition(userId, data);
        console.log('Word and definition added successfully!');
      } catch (error) {
        console.error('Error adding word definition: ', error);
      }
    } else {
      console.error('Please enter both word and definition.');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter its definition"
        value={definition}
        onChange={(e) => setDefinition(e.target.value)}
      />
      <button onClick={handleAddWord}>Add Word</button>
    </div>
  );
};

export default AddWordForm;
