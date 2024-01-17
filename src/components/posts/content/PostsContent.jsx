import React from 'react'
import PostsProfile from './PostsProfile'
import PostsOneContent from './PostsOneContent'
import PostsOneReact from './PostsOneReact'
import { Link } from 'react-router-dom'
import { addressPost, addressUser } from '../../../utill/constant/constant'

const PostsContent = ({item, modal, swiperElRef, user, posts, setPosts, userModal}) => {
  console.log(item)
  return (
    <div className='p-5 border-b mb-12' key={item._id}>
      <Link to={`${addressUser}${item.author.id}`}>
        <PostsProfile item={item} />
      </Link>
      <Link to={`${addressPost}${item._id}`}>
        <PostsOneContent item={item} modal={modal} userModal={userModal} swiperElRef={swiperElRef} />
      </Link>
      <PostsOneReact item={item} user={user} posts={posts} setPosts={setPosts} />
    </div>
  )
}

export default PostsContent