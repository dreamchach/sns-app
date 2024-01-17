import React from 'react'
import PostsContent from '../../posts/content/PostsContent'

const UsersPostsContainer = ({posts, postModal, userModal, swiperElRef, user, setPosts}) => {
  return (
    <div className='my-12 mx-5'>
        {posts.map((item) => 
          <PostsContent key={item._id} item={item} modal={postModal} userModal={userModal} swiperElRef={swiperElRef} user={user} posts={posts} setPosts={setPosts} />
        )}
    </div>
  )
}

export default UsersPostsContainer