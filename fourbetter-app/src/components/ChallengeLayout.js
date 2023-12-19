import { useParams } from 'react-router-dom';

function ChallengeLayout(){
    const {textID} = useParams();
    const questions = ["This is question 1","This is question 2","This is question 3."];
    const {challengeNum} = useParams();
    return (
        <div>
            <h2>This is the challenges layout number {challengeNum} for text {textID}</h2>
            <p>Right now, all you can do is see the questions as a list.</p>
            <br/>
            {questions.map(qn => (
                <li>{qn}</li>
            ))}
            <br/>
            <a href= {/exercises/+{textID}}>
                <button>Back to the Text Page</button>
            </a>
        </div>
    )
}

export default ChallengeLayout;