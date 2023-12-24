const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const gen = require('./components/gen.js')
const cors = require('cors')


const fs = require('fs');
const path = require('path');
const path1 = path.resolve('src/assets/LHC.txt');
const path2 = path.resolve('src/assets/chroniclesOfNarnia.txt');
const path3 = path.resolve('src/assets/jamesAndTheGiantPeach.txt');
const path4 = path.resolve('src/assets/stuartLittle.txt');
const text1 = fs.readFileSync(path1, 'utf8');
const text2 = fs.readFileSync(path2, 'utf8');
const text3 = fs.readFileSync(path3, 'utf8');
const text4 = fs.readFileSync(path4, 'utf8');

// config
app.use(cors());
app.use(express.json());

// API endpoint
app.post('/api', (req, res) => {
  
  // prep data
  console.log('API TRIGGERED');
  const text = eval(`text${req.body.content}`);
  const type = req.body.type;
  const instruction = req.body.instruction;
  var output;

  // Gemini API call
  gen.caller(type, instruction, text )
  .then((res) => {
    output = res
  })
  setTimeout(() => {
    res.send(JSON.stringify({questions: output}));
  }, 5000);
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`
  );

});