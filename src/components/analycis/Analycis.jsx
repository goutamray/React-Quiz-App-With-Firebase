import Question from "../question/Question"




const Analycis = () => {
  return (
    <>
     <div className="container">
      <div className="row">
        <div className="col">
           <div className="analysis">
             <h1>Question Analysis</h1>
             <h4>You answerd 5 out of 10 questions correctly</h4>
             <Question />
           </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default Analycis


