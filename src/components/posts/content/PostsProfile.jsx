import React from 'react'
import PostAuthContent from '../../post/postContent/postDescContent/PostAuthContent'

const PostsProfile = ({item}) => {
  return (
    <div className='flex justify-between items-center gap-2.5'>
      <PostAuthContent postAuthPhoto={item.author.profilePhoto} postAuthNickname={item.author.nickName} postAuthId={item.author.id} />
      <div>{item.date}</div>                          
    </div>
  )
}

export default PostsProfile