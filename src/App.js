import React from 'react';
import questions from './questions/questionList';


function App() {
  return (
    <div className="App">
      
      <div className="questionBox" >
      {
        
          questions.map((question)=>{
           const optionsArray = question.answerOptions;
           const size=4;
            return(
             

              <div className="question">
                <h5>Question No {question.id}</h5>
              <h1 className="questionText">{question.questionText}</h1>
              
               <div className="Options">
                
                 <ul className="optionslist">
                   
                     <li className="option">{optionsArray[0].answerText}</li>
                     <li className="option">{optionsArray[1].answerText}</li>
                     <li className="option">{optionsArray[2].answerText}</li>
                     <li className="option">{optionsArray[3].answerText}</li>


                 </ul>
                </div>    
              </div>
            )
          })

      }
        </div>
    </div>
  );
}

export default App;
