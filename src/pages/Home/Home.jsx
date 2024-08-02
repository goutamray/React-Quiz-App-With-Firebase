



import { Link } from "react-router-dom"
import Video from "../../components/video/Video"

import "./Home.css" 
const Home = () => {
  return (
    <>
        <main className="main">
          <div className="container">
            <div className="row">
              <div className="col">
                  <div className="all-video-box">
                     <Video />
                     <Video />
                     <Video />
                     <Video />

                     <Video />
                     <Video />
                     <Video />
                     <Video />
                  </div>
              </div>
            </div>
          </div>
        </main>
    </>
  )
}

export default Home


