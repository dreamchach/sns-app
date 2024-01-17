import React, { useEffect } from 'react'
import PostFullCommentContent from './PostFullCommentContent'
import { getComments } from '../../../utill/functions/post'

const PostCommentsContent = ({comments, setComments, setCommentsLength, user, location, commentsLength}) => {
    useEffect(() => {
        getComments(location, setComments)
    }, [])
    
    return (
        <div>
            {comments.map((item) => 
                <PostFullCommentContent key={item._id} item={item} comments={comments} setComments={setComments} setCommentsLength={setCommentsLength} user={user} commentsLength={commentsLength} />
            )}
        </div>
    )
}

export default PostCommentsContent