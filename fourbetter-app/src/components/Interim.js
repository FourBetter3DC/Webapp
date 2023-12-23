import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import raw from '../assets/LHC.txt';
import raw1 from '../assets/chroniclesOfNarnia.txt';
import raw2 from '../assets/jamesAndTheGiantPeach.txt';
import raw3 from '../assets/stuartLittle.txt';
const gen = require('./gen.js');


/*Celine's Note: a temporary solution until a proper one is found
But remember to convert the questions to a string/array first before passing it to the challenge layout */

const FetchText = () => {
    const [text, setText] = useState("");
    const TextID = useParams().textID;
    var selected, title;
    if (TextID == 1){
        selected=raw
        title="The Little Hungry Caterpillar"}
    else if(TextID == 2){
        selected=raw1
        title= "The Chronicles of Narnia"}
    else if(TextID == 3){
        selected=raw2
        title = "James and the Giant Peach"}
    else{selected=raw3
        title = "Stuart Little"}
  
    useEffect(() => {
      fetch(selected)
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
    return text;
}

const ShowRefresh = (questions) =>{
    console.log("Props has been passed");
    console.log(typeof(questions));
    const [showBtn,setShowBtn] = useState(false);
    const textID = useParams().textID;

    useEffect(()=>{
    setTimeout(()=>{
      setShowBtn(!showBtn);
    },6000)
    },[])

    return (
      <div>
        <Link to={`/exercises/${textID}/challenges`} questions={questions}>
        {showBtn && <button align="center"> Refresh? </button>}
        </Link>
      </div>
    )}

const Interim = (questions) =>{
    const [setQuestions] = useState('');
    const text = FetchText();
    useEffect(() => {
        const fetchQuestionsFromApi = async () => {
          try {
            const response = await gen.caller(1,5,text);
            console.log(typeof(response));
            const data = await response.json();
            console.log(data);
            console.log(typeof(data));
            console.log("Reloading page....");
            setQuestions(data);
            return(<div>
              <p>{questions}</p>
              <p align="center">Loading...</p>
              <ShowRefresh questions = {questions}/>
              </div>)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
  
        fetchQuestionsFromApi();
      }, []);
}

export default Interim;