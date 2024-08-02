
import { Link } from "react-router-dom";
import photo from "../../assets/web.jpg"

import "./Video.css"; 
const Video = () => {
  return (
     <>
         <div className="single-video shadow">
            <Link to="/Quiz">
              <div className="video">
                   <img src={photo} alt="" />
                   <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div className="qmeta">
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
             </div>
           </Link>
         </div>
        
     </>
  )
}

export default Video


