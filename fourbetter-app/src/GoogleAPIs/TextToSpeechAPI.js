import React, { useEffect, useState } from 'react';

const TextToSpeechPlayer = () => {
  const [audioBuffer, setAudioBuffer] = useState(null);

  useEffect(() => {
    const fetchAndPlayAudio = async () => {
      try {
        const apiUrl = 'https://FourBetter-tts-api-endpoint.com';

        // The text to synthesize
        const text = wordtext;

        // Construct the request
        const request = {
          input: { text: text },
          voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
          audioConfig: { audioEncoding: 'MP3' },
        };

        // Make the Text-to-Speech API request
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(request),
        });

        // Check if the request was successful
        if (response.ok) {
          const audioData = await response.arrayBuffer();

          // Create an AudioContext
          const audioContext = new (window.AudioContext || window.webkitAudioContext)();

          // Decode the audioData into an AudioBuffer
          audioContext.decodeAudioData(audioData, (buffer) => {
            // Set the audioBuffer in the state
            setAudioBuffer(buffer);
          });
        } else {
          console.error('Failed to fetch audio:', response.statusText);
        }
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    };

    fetchAndPlayAudio();
  }, []);

  return (
    <div>
      <p>Text-to-Speech Player Component</p>
      {audioBuffer && (
        <button onClick={() => {
          // Create a buffer source node
          const audioContext = new (window.AudioContext || window.webkitAudioContext)();
          const source = audioContext.createBufferSource();
          source.buffer = audioBuffer;

          // Connect the source to the audio context's destination (e.g., speakers)
          source.connect(audioContext.destination);

          // Play the audio
          source.start();
        }}>
          Play Audio
        </button>
      )}
    </div>
  );
};

export default TextToSpeechPlayer;
