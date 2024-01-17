import React, { useState } from 'react'
import PostContent from './postContent/PostContent'
import PostCommentsContent from './postCommentsContent/PostCommentsContent'
import PostInput from './postInput/PostInput'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PostContainer = () => {
    const [commentsLength, setCommentsLength] = useState(0)
    const location = useLocation()
    const user = useSelector(state => state.auth)
    const [comments, setComments] = useState([])

    return (
        <div className='my-12 mx-5'>
            <PostContent user={user} commentsLength={commentsLength} location={location} setCommentsLength={setCommentsLength} />
            <PostCommentsContent comments={comments} setComments={setComments} setCommentsLength={setCommentsLength} user={user} location={location} commentsLength={commentsLength}/>
            <PostInput user={user} location={location} setComments={setComments} setCommentsLength={setCommentsLength} commentsLength={commentsLength} />
        </div>
    )
}

export default PostContainer