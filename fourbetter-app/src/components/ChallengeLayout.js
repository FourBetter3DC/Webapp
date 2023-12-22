import { useParams } from 'react-router-dom';


function ChallengeLayout(){
    const {textID, challengeNum} = useParams();
    const questions = ["This is question 1","This is question 2","This is question 3.", "This is question 4.", "This is question 5."];

    console.log('TextID');
    console.log(textID);
    console.log("challengeNum");
    console.log(challengeNum);
    console.log(challengeNum == 1)

    if(challengeNum == 1){
    const nextchallengeNum = parseInt(challengeNum) + 1;
    console.log(nextchallengeNum);
    return (
        <div>
            <h2>This is the challenges layout number {challengeNum} for text {textID}</h2>
            <p>Right now, all you can do is see the questions</p>
            <br/>
            {questions[challengeNum-1]}
            <br />
            <br />
            <a href= {/exercises/+textID+/challenges/+nextchallengeNum}>
                <button>Next question</button>
            </a>
            <br />
            <a href= {/exercises/+textID}>
                <button>Back to the Text Page</button>
            </a>
        </div>
    )}
    else if(challengeNum <= 4){
        console.log('Im here now');
        const prevchallengeNum = parseInt(challengeNum) - 1;
        const nextchallengeNum = parseInt(challengeNum) + 1;
        return(
        <div>
            <h2>This is the challenges layout number {challengeNum} for text {textID}</h2>
            <p>Right now, all you can do is see the questions</p>
            <br/>
            {questions[challengeNum-1]}
            <br/>
            <br />
            <a href= {/exercises/+textID+/challenges/+prevchallengeNum}>
                <button>Previous question</button>
            </a>
            <br />
            <a href= {/exercises/+textID+/challenges/+nextchallengeNum}>
                <button>Next question</button>
            </a>
            <br />
            <a href= {/exercises/+textID}>
                <button>Back to the Text Page</button>
            </a>
        </div>)
    }

    else{
        const prevchallengeNum = parseInt(challengeNum) - 1;
        return(
        <div>
            <h2>This is the challenges layout number {challengeNum} for text {textID}</h2>
            <p>Right now, all you can do is see the questions</p>
            <br/>
            {questions[challengeNum-1]}
            <br />
            <br />
            <a href= {/exercises/+textID+/challenges/+prevchallengeNum}>
                <button>Previous question</button>
            </a>
            <br />
            <a href= {/exercises/+textID}>
                <button>Back to the Text Page</button>
            </a>
        </div>
    )}
}

export default ChallengeLayout;