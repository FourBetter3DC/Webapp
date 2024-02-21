// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision').v1p1beta1;

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const fileName = imgfile;

// Performs label detection on the local file
const [result] = await client.textDetection(fileName);
const pages = result.fullTextAnnotation.pages;
pages.forEach(page => {
  page.blocks.forEach(block => {
    const blockWords = [];
    block.paragraphs.forEach(paragraph => {
      paragraph.words.forEach(word => blockWords.push(word));
      console.log(`Paragraph confidence: ${paragraph.confidence}`);
    });

    let blockText = '';
    const blockSymbols = [];
    blockWords.forEach(word => {
      word.symbols.forEach(symbol => blockSymbols.push(symbol));
      let wordText = '';
      word.symbols.forEach(symbol => {
        wordText = wordText + symbol.text;
        console.log(`Symbol text: ${symbol.text}`);
        console.log(`Symbol confidence: ${symbol.confidence}`);
      });
      console.log(`Word text: ${wordText}`);
      console.log(`Word confidence: ${word.confidence}`);
      blockText = blockText + ` ${wordText}`;
    });

    console.log(`Block text: ${blockText}`);
    console.log(`Block confidence: ${block.confidence}`);
  });
});