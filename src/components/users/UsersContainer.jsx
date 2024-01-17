import React, { useEffect, useRef, useState } from 'react'
import UsersProfileContainer from './UsersProfileContainer/UsersProfileContainer'
import UsersPostsContainer from './UsersPostsContainer/UsersPostsContainer'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { api } from '../../utill/functions/users';
import { register } from 'swiper/element/bundle';
import PostsAddButton from '../posts/content/PostsAddButton';
import PostsModalContainer from '../posts/modal/PostsModalContainer';

register();

const UsersContainer = () => {
    const [id, setId] = useState('')
    const [postModal, setPostModal] = useState(false)
    const [userPhoto, setUserPhoto] = useState('')
    const [nickname, setNickname] = useState('')
    const [posts, setPosts] = useState([])
    const [userModal, setUserModal] = useState(false)
    const user = useSelector(state => state.auth)
    const location = useLocation()
    const swiperElRef = useRef(null);

    useEffect(() => {
        if(swiperElRef.current !== null) {
            // listen for Swiper events using addEventListener
            swiperElRef.current.addEventListener('swiperprogress', (e) => {
                const [swiper, progress] = e.detail;
                console.log(progress);
            });
        
            swiperElRef.current.addEventListener('swiperslidechange', (e) => {
                console.log('slide changed');
            });            
        }

        api(location, setUserPhoto, setNickname, setId, setPosts)
    }, [location]);

  return (
    <div className='mt-20 my-5'>
        <UsersProfileContainer userPhoto={userPhoto} nickname={nickname} id={id} user={user} setUserModal={setUserModal} userModal={userModal} setNickname={setNickname} setUserPhoto={setUserPhoto} />
        <UsersPostsContainer posts={posts} postModal={postModal} userModal={userModal} swiperElRef={swiperElRef} user={user} setPosts={setPosts} />
        {id === user.id && <PostsAddButton setModal={setPostModal} />}
        {id === user.id && postModal && <PostsModalContainer modal={postModal} swiperElRef={swiperElRef} setModal={setPostModal} user={user} setPosts={setPosts} address='/user/add' />}
  </div>
    )
}

export default UsersContainer