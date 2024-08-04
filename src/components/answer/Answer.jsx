

import CheckBox from "../checkbox/CheckBox";

import "./Answer.css"; 
const Answer = ({ options = [], handleChange }) => {
  return (
    <>
      <div className="answer-part">
          {
            options.map((option, index) => {
              return  <CheckBox key={index} title={option.title} value={index} checked={option.checked} onchange={(e) => {
                handleChange(e, index)
              }}/>
            })
          }
       </div>
    </>
  )
}

export default Answer


