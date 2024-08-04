
import "./ProgressBar.css"; 

const ProgressBar = ({next, prev, progress }) => {
  return (
    <>
        <div className="progressBar">
          <div className="backButton" onClick={prev}>
            <span className="material-icons-outlined"> arrow_back </span>
          </div>
          <div className="rangeArea">
            <div className="tooltip-custom "> 
              <p> { progress } % Cimplete! </p>
            </div>
            <div className="rangeBody">
              <div className="progress" style={{width: `${progress}%`}}></div>
            </div>
          </div>
         
            <button className="button next my-custom-btn  " onClick={ next}>
              <span>Next Question</span>
              <span className="material-icons-outlined"> arrow_forward </span>
            </button>
        
        </div>
    </>
  )
}

export default ProgressBar



