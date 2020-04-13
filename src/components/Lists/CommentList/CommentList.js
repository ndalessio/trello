import React from react;
import './CommentList.scss';

const CommentList = ({comments}) => (
    comments.map(comment => 
        <Comment
            key={comment.id}
            text={comment.text}
            username={comment.username}
        />)
)

export default CommentList