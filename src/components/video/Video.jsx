
import { Link } from "react-router-dom";


import "./Video.css"; 
const Video = ({ title, id, noq}) => {

  return (
     <>
         <div className="single-video shadow">
            <Link to={`/quiz/${id}`}>
              <div className="video">
                   <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={ title } />
                   <p> { title } </p>
                <div className="qmeta">
                    <p> { noq } Questions </p>
                    <p> Total points : {noq * 5}</p>
                </div>
             </div>
           </Link>
         </div>
        
     </>
  )
}

export default Video


