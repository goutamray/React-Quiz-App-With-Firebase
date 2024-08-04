

import AllVideos from "../../components/videos/AllVideos"

import "./Home.css" 
const Home = () => {

  return (
    <>
        <main className="main">
          <div className="container">
            <div className="row">
              <div className="col">
                 
                   <AllVideos />

              </div>
            </div>
          </div>
        </main>
    </>
  )
}

export default Home


