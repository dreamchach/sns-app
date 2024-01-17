import React from 'react'

const PostAuthContent = ({postAuthPhoto, postAuthNickname, postAuthId}) => {
  return (
    <div className='flex gap-2.5 items-center'>
        <div className='w-12 h-12 border rounded-full overflow-hidden'>
            <img src={postAuthPhoto} alt={postAuthNickname} />
        </div>
        <div>
            <div>{postAuthNickname}</div>
            <div className='text-xs text-none-text'>{postAuthId}</div>
        </div>
    </div>
  )
}

export default PostAuthContent