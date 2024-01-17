import React, { useEffect, useRef, useState } from 'react'
import PostsContent from './PostsContent'
import PostsAddButton from './PostsAddButton'
import PostsModalContainer from '../modal/PostsModalContainer'
import { register } from 'swiper/element/bundle';
import { useSelector } from 'react-redux';
import { getPosts } from '../../../utill/functions/posts';

register();

const PostsContainer = () => {
  const swiperElRef = useRef(null);
  const [modal, setModal] = useState(false)
  const [posts, setPosts] = useState([])
  const user = useSelector(state => state.auth)

  useEffect(() => {
      if(swiperElRef.current !== null) {
          swiperElRef.current.addEventListener('swiperprogress', (e) => {
              const [swiper, progress] = e.detail;
              console.log(progress);
          });
      
          swiperElRef.current.addEventListener('swiperslidechange', (e) => {
              console.log('slide changed');
          });            
      }
      getPosts(setPosts)
  }, []);

  return (
    <div className='my-12 mx-5'>
      {posts.map((item) => 
        <PostsContent key={item._id} item={item} modal={modal} swiperElRef={swiperElRef} user={user} posts={posts} setPosts={setPosts} userModal={false}/>
      )}
      <PostsAddButton setModal={setModal} />
      {modal && <PostsModalContainer modal={modal} swiperElRef={swiperElRef} setModal={setModal} user={user} setPosts={setPosts} address='/add' />}
    </div>
  )
}

export default PostsContainer