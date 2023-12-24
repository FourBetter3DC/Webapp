const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const gen = require('./components/gen.js')
const cors = require('cors')
const bodyParser = require('body-parser');


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


app.use(cors());
app.use(bodyParser.json())

app.use((req, res, next) => {
  next()
})

// API endpoint
app.post('/api', (req, res) => {
  console.log('API TRIGGERED');
  req.body
  console.log(req.body)
  var output
  /* gen.caller( )
  .then((res) => {
    output = res
  }) */
  setTimeout(() => {
    res.send(output);
  }, 5000);
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`
  );

});