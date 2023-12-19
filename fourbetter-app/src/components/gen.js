const { GoogleGenerativeAI } = require("@google/generative-ai");

// initialise model
const API_KEY = 'AIzaSyCKNXV91Hl3OgblgwLOKzEP97ac2V7XXOE';
const genAI = new GoogleGenerativeAI(API_KEY);


module.exports ={
    // Genimi API handling
    run: function (instruction='', content='', temperatureV=0.9, topPV=0.8, topKV=20) {

        // input filtering, will trigger error and app crash
        if ( !(typeof temperatureV === 'number') || 
        !(typeof topPV === 'number') || 
        !(typeof topKV === 'number') || 
        !(0 <= temperatureV <= 1) || 
        !(0<= topPV <= 1) || 
        (topKV < 1) ) {
            throw new Error('Problem with generationConfig parameters.\nEnsure !(0 <= temperatureV <= 1) || !(0<= topPV <= 1) || (topKV < 1)')
        }

        // generate prompt and generationConfig
        const base = "You are a creating an English language assesment. The assessment is at a basic level of English and is administered to children under the age of 12.";

        if ((typeof instruction === 'number') && content) {
            var textPrompt = `${base} Write ${instruction} questions to assess the students' grammar, vocabulary, comprehension. Respond only with the ${instruction} questions, each separated by blank lines and numbered with an index.\n\n\n${content}`
        } else if (instruction && content) {
            var textPrompt = `${content}\n\n\n${base} Based on the passage and questions above were created to assess the grammar, vocabulary, conmprehension skills of children under the age of 12.`
        } else if (instruction && !content) {
            var textPrompt = instruction
        } else {
            throw new Error('Problem with content or instruction input. Did not send API request.')
        }


        // model config
        const generationConfig = {
            temperature: temperatureV,
            topP: topPV,
            topK: topKV,
        };
        const model = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig});


        // execute model
        return model.generateContent(textPrompt)
        .then((res) => {
            return res.response.text()
        })
    }
}




