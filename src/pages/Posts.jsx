import React from 'react'
import Header from '../components/laylout/Header'
import PostsContainer from '../components/posts/content/PostsContainer';
import withAuth from '../components/withAuth';

const Post = () => {
  return (
    <div>
        <Header />
        <PostsContainer />
    </div>
  )
}

export default withAuth(Post)