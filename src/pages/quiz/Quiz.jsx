


import Answer from "../../components/answer/Answer";
import MiniPlayer from "../../components/miniPlayer/MiniPlayer";
import ProgressBar from "../../components/progressBar/ProgressBar";
import "./Quiz.css"; 
const Quiz = () => {
  return (
    <>
      <div className="quiz">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
               <div className="quiz-box">
                  <h1>Pick three of your favorite Star Wars Flims</h1>
                  <h4>Question can have multiple answers</h4>
                  <div className="another-box">
                     <Answer />
                     <ProgressBar />
                     <MiniPlayer />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quiz


