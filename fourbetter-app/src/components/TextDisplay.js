import React, { useEffect, useState } from "react";
import raw from '../assets/LHC.txt';

const TextDisplay = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(raw)
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

  return <div>{text}</div>;
};

export default TextDisplay;

