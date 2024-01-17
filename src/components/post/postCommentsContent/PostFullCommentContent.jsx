import React, { useEffect, useState } from 'react'
import PostEditCommentContent from './postEditCommentContent/PostEditCommentContent'
import PostCommentContent from './postCommentContent/PostCommentContent'

const PostFullCommentContent = ({item, comments, setComments, setCommentsLength, user, commentsLength}) => {
    const [commentEdit, setCommentEdit] = useState(false)
    const [commentText, setCommentText] = useState('')

    useEffect(() => {
        setCommentText(item.text)
    }, [])
    
    
    console.log('postfullcommentcontent', item)

    return (
        <div className='mb-20 px-5' key={item._id}>
            <PostCommentContent item={item} commentEdit={commentEdit} setCommentEdit={setCommentEdit} comments={comments} setComments={setComments} setCommentsLength={setCommentsLength} user={user} commentsLength={commentsLength} />
            {!commentEdit && <div className='mt-12'>{commentText}</div>}
            {commentEdit && 
                <PostEditCommentContent commentText={commentText} setCommentText={setCommentText} item={item} setCommentEdit={setCommentEdit} />
            }
        </div>
    )
}

export default PostFullCommentContent