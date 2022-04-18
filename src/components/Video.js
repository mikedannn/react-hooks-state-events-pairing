import react from "react";
import VideoDetails from "./VideoDetails";
import VideoComments from "./VideoComments";


function Video(props) {
    console.log(props)
    return (
    <div>
        <iframe
            width="919"
            height="525"
            src={props.videoData.embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
        />
      <VideoDetails 
        title={props.videoData.title} 
        viewCount={props.videoData.views} 
        createdAt={props.videoData.createdAt}
        upvotes={props.videoData.upvotes}
        downvotes={props.videoData.downvotes}
        />
      <VideoComments
        comments={props.videoData.comments}
        
        /> 
    </div>)
}

export default Video;