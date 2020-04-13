import React from react

const CommentList = ({comments}) => (
    comments.map(comment => 
        <Comment
            key={comment.id}
            text={comment.text}
            username={comment.username}
        />)
)

export default CommentList

