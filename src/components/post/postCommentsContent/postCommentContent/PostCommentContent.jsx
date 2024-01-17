import React from 'react'
import PostCommentAuthContent from './PostCommentAuthContent'
import PostCommentMenuContent from './PostCommentMenuContent'
import { Link } from 'react-router-dom'
import { addressUser } from '../../../../utill/constant/constant'

const PostCommentContent = ({item, commentEdit, setCommentEdit, comments, setComments, setCommentsLength, user, commentsLength}) => {
    console.log(item, user)
    
    return (
        <div className='flex justify-between items-center gap-2.5'>
            <Link to={`${addressUser}${item.author.id}`}>
                <PostCommentAuthContent item={item}/>
            </Link>
            {!commentEdit && item.author.id === String(user.id) && 
                <PostCommentMenuContent setCommentEdit={setCommentEdit} comments={comments} item={item} setComments={setComments} setCommentsLength={setCommentsLength} commentsLength={commentsLength} />
            }                         
        </div>
    )
}

export default PostCommentContent