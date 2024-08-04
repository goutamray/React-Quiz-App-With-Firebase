import useVideoList from "../../hooks/useVideoList"
import Video from "../video/Video"



const AllVideos = () => {
  
  const { loading, error, videos  } = useVideoList(); 

  return (
    <>
      <div className="all-video-box">
          {
           videos.length > 0 && videos.map((video) => {
              return <Video key={video.youtubeID} title={video.title} id={video.youtubeID} noq={video.noq}/>  
            })
          }
    
         {
          !loading && videos.length === 0 && (
            <h1> No data found!</h1>
          )
         }

         {
          error &&  (
            <h1> There was an error </h1>
          )
         }
        </div>
    </>
  )
}

export default AllVideos




