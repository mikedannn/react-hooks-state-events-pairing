import VideoComment from "./VideoComment"


function VideoComments(props) {
    function renderComments() {
        return props.comments.map(comment => {
            return (
                <VideoComment comment={comment}/>
            )
        })
    }


    return (
        <div id="video-comments-container">
            <hr></hr>
            <h2>{props.comments.length} Comments</h2>
            {renderComments()}
        </div>
        
    )
}

export default VideoComments;