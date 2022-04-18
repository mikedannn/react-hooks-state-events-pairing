import { useState } from "react";


function VideoDetails(props) {
    const [upvotes, setUpvotes] = useState(props.upvotes);
    const [downvotes, setDownvotes] = useState(props.downvotes);

    function handleClick(e) {

        switch (e.target.id) {
            case 'upvote':
                setUpvotes(upvotes + 1);
                break;
            case 'downvote':
                setDownvotes(downvotes + 1);
                break;
            case 'toggle':
                let commentsContainer = document.getElementById('video-comments-container');
                commentsContainer.classList.toggle("hidden")
                if (e.target.innerText === "Hide Comments") {
                    e.target.innerText = "Show Comments"
                } else {
                    e.target.innerText = "Hide Comments"
                }
                break;
        }
    }

    return (
        <div>   
            <h1>{props.title}</h1>
            <p>{props.viewCount} Views | Uploaded {props.createdAt}</p>
            <button onClick={handleClick} id="upvote">{upvotes}👍</button>
            <button onClick={handleClick} id="downvote">{downvotes}👎</button>
            <br></br>
            <br></br>
            <button onClick={handleClick} id="toggle">Hide Comments</button>
        </div>
        )
}

export default VideoDetails;