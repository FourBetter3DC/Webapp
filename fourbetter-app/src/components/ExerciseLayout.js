import { useParams, Link } from 'react-router-dom';

function ExerLayout() {
    const {textID} = useParams();
    const text = {textID, textcontent:"whee this is all the content of the text", questions:["This is question 1","This is question 2","This is question 3."]};
    return (
        <div>The layout for text {textID} has been printed.
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <p>{text.textcontent}</p>
            <br/>
            <br/>
            <a href= {/exercises/+{textID}+/challenges/+1}>
                <button>To Challenges Page</button>
            </a>
          </div>
        </div>
        
    )
}

export default ExerLayout;