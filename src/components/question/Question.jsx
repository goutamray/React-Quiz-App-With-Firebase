import Answer from "../answer/Answer"



const Question = () => {
  return (
    <>
          <div className="question">
            <div className="qtitle">
                <span className="material-icons-outlined"> help_outline </span>
                Here goes the question from Learn with Sumit?
            </div>
            <div className="answers mt-2">
                <Answer />
            </div>
          </div>
    </>
  )
}

export default Question




