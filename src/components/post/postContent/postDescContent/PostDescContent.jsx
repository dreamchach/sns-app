import React from 'react'
import PostAuthContent from './PostAuthContent'
import PostDescEditContent from './PostDescEditContent'
import { Link } from 'react-router-dom'
import { addressUser } from '../../../../utill/constant/constant'

const PostDescContent = ({postAuthPhoto, postAuthNickname, postAuthId, postEdit, user, setPostEdit, location}) => {
  return (
    <div className='flex justify-between items-center gap-2.5'>
        <Link to={`${addressUser}${postAuthId}`}>
          <PostAuthContent postAuthPhoto={postAuthPhoto} postAuthNickname={postAuthNickname} postAuthId={postAuthId} />
        </Link>
        <PostDescEditContent postEdit={postEdit} postAuthId={postAuthId} user={user} setPostEdit={setPostEdit} location={location} />                        
    </div>
  )
}

export default PostDescContent