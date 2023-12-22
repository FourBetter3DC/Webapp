const { GoogleGenerativeAI } = require("@google/generative-ai");
const { HarmBlockThreshold, HarmCategory } = require("@google/generative-ai");


// initialise model
const API_KEY = 'AIzaSyCKNXV91Hl3OgblgwLOKzEP97ac2V7XXOE';
const genAI = new GoogleGenerativeAI(API_KEY);



/* formatting for gen.caller function

caller = function (type, instruction, content, temperatureV=1, topPV=0.5, topKV=20)

usage format (inside async):
    gen.caller(2, response2, text)


Generating Questions:
gen.caller(
    1 ,
    <total number of questions : int> ,
    <text being used : str>
)
returns an array of the questions with their numbers 
(eg. "2. How did Mary's parents treat her when she was young?")


Checking Answers:
gen.caller(
    2 ,
    <text being used : str> ,
    <questions and answers alternating in a single array : array>
)

Direct Prompt:
gen.caller(
    3 ,
    <prompt :str>
)

last 3 parameters are optional for config
*/




// caller and formatting function
module.exports.caller = function (type, instruction, content, temperatureV=0.5, topPV=0.5, topKV=20) {
    if (type == 2) {
        let tmp = ''
        for (let i = 0; i < instruction.length; i += 2) {
            tmp += `question: ${instruction[i]}\nanswer: ${instruction[i + 1]}\n\n\n`
        }
        content = tmp.slice(0, -3)
    };
    const output = run(type, instruction, content, temperatureV, topPV, topKV)
    .then((res) => {
        this.format(type, res)
        console.log('API Response Received')
    });
    return output
};




// output formatting helper
module.exports.format = function format(type, input) {
    switch(type) {
        case 1: // extract just questions from Gemini response
            let qnMatch = /(\d[.] .+?)(?:\n)/gi;
            var allQn = Array.from(input.matchAll(qnMatch));
            allQn[4][1] = input.slice(allQn[4].index);
            for (let i = 0; i < allQn.length; i++) {
                allQn[i] = allQn[i][1]
            };
            var output = allQn
            return output
        case 2:
            const anMatch = /correct/gi;
            const score = input.match(anMatch).length
            var output = score
            return output;
        case 3:
            return input;
    };
}




// Genimi API handling
async function run(type, instruction, content, temperatureV, topPV, topKV) {

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
    // type 1: question generation, type 2: answer verification, type 3: direct prompt
    switch (type) {
        case 1: //question generation
            if (!content && !instruction) {
                throw new Error('missing either `content` or `instruction` parameters')
            }
            var textPrompt = `Text:\n ${content}\n\n\nExtract vocabulary and grammar used in the text above to create questions about the story.There should be ${instruction - 1} short answer questions and 1 multiple-choice question. The multiple-choice question should have 4 similar options while maintaining that the correct option is still clearly discernable. The questions are meant to assess English proficiency in young children.Format the response so that each question is separated by blank lines and numbered with an index.`;
            break;
        case 2: // answer verification
            if (!content && !instruction) {
                throw new Error('missing either `content` or `instruction` parameters')
            }
            var textPrompt = `Text: ${content}\n\n\nQuestions: ${instruction}The answers above are a student's responses to the text and questions above. Check if the responses answer the questions correctly and that the grammar is correct. Also check if the answer is in the correct tense relative to the text and questions. If a response does not fulfill any of those criteria, mark it as wrong. Respond only with the question numbers and gradings.`;
            break;
        case 3: // direct prompt
            if (!instruction) {
                throw new Error('missing `instruction parameter')
            }
            var textPrompt = instruction;
            break;
        default:
            throw new Error('Problem with content or instruction input. Did not send API request.')
    }


    // model config
    const generationConfig = {
        temperature: temperatureV,
        topP: topPV,
        topK: topKV,
    };
    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        ];
    const model = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig, safetySettings});


    // execute model
    console.log('API Sending')
    const result = await model.generateContent(textPrompt)
    const output = result.response.text()
    console.log(output)
    return output
}




