const speech = require('@google-cloud/speech').v1p1beta1;

// Creates a client
const client = new speech.SpeechClient();

const config = {
  encoding: 'LINEAR16',
  languageCode: 'en-US',
  audioChannelCount: 2,
  enableSeparateRecognitionPerChannel: true,
};

const audio = {
  uri: gcsUri,
};

const request = {
  config: config,
  audio: audio,
};

const [response] = await client.recognize(request);
const transcription = response.results
  .map(
    result =>
      ` Channel Tag: ${result.channelTag} ${result.alternatives[0].transcript}`
  )
  .join('\n');
console.log(`Transcription: \n${transcription}`);