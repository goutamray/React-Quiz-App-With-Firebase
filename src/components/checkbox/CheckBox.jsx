

import "./CheckBox.css"; 
const CheckBox = ({title }) => {
  return (
    <>
        <label className="answer" htmlFor="option1">
          <input type="checkbox" id="option1" />
            { title }
        </label>
    </>
    
  )
}

export default CheckBox; 













