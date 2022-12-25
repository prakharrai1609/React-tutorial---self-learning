import React from 'react'

function Comment(props) {
    return (
        <div className="comment">
            <div className="user-info">
                <h5>{props.name}</h5>
            </div>
            <div className="comment-info">
                <h6>{props.comment}</h6>
                <p>{new Date().toLocaleTimeString()}</p>
            </div>
            <hr />
        </div>
    )
}

export default Comment;