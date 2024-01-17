import React from 'react'
import Header from '../components/laylout/Header'
import PostContainer from '../components/post/PostContainer';
import withAuth from '../components/withAuth';

const Post = () => {
  return (
    <div>
        <Header />
        <PostContainer />
    </div>
  )
}

export default withAuth(Post) 