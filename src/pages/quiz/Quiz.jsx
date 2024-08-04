
import { useParams } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";

// import components 
import Answer from "../../components/answer/Answer";
import MiniPlayer from "../../components/miniPlayer/MiniPlayer";
import ProgressBar from "../../components/progressBar/ProgressBar";

import useQuestions from "../../hooks/useQuestions";
import _ from "lodash"
import "./Quiz.css"; 

const initialState = null;

const reducer = (state, action ) => {
  switch (action.type) {
    case "questions":
       action.value.forEach(question => {
        question.options.forEach(option => {
          option.checked = false; 
        })
       });
     return action.value; 

    case "answer":
       const questions = _.cloneDeep(state); 
       questions[action.questionID].options[action.optionIndex].checked = action.value; 
       
       return questions; 
 
    default:
      return state;
  }
}

 

const Quiz = () => {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
    dispatch({
      type : "questions",
      value : questions
    })
  }, [questions]) 

  // handle anser change 
  const handleAnswerChange = (e, index) => {
    dispatch({
      type : "answer",
      questionID : currentQuestion, 
      optionIndex : index,
      value : e.target.checked, 
    })
  }

  // handle when users clicks the next button to get the next question 
  const nextQuestion = () => {
     if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(prevCurrent => prevCurrent + 1 );
     }
  };

  // handle when users clicks the prev button to get the previous question 
  const prevQuestion = () => {
     if (currentQuestion >= 1 && currentQuestion <= questions.length) {
        setCurrentQuestion(prevCurrent => prevCurrent + 1 );
     }
  };

  // submit quiz 
  const submit = async() => {
 
  }

  // calculate percentense of progress 
  const percentense = questions.length > 0 ? ((  currentQuestion + 1 ) / questions.length ) * 100 : 0 ; 
 
  return (
    <>
      <div className="quiz">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
               <div className="quiz-box">
                { loading && <h1> Loading . . . </h1> }
                { error && <h1> There was an error  </h1> }

                { !loading && !error && qna && qna.length > 0 && (
                  <>
                     <h1>{qna[currentQuestion].title}</h1>
                     {
                      console.log(qna[currentQuestion])
                     }
                     
                      <h4>Question can have multiple answers</h4>
                    <div className="another-box">
                        <Answer options={qna[currentQuestion].options} handleChange={handleAnswerChange}/>

                        <ProgressBar 
                            next = {nextQuestion} 
                            prev = {prevQuestion}
                            progress = {percentense}
                          /> 

                        <MiniPlayer />    
                    </div>
                  </>
                ) }
                 
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quiz; 


