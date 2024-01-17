import React, { useState } from 'react'
import PostsModalSlide from './PostsModalSlide'
import PostsModalUpload from './PostsModalUpload'
import PostsModalButtons from './PostsModalButtons'
import Modal from 'react-modal'
import { customStyles } from '../../../utill/modal/custom'

const PostsModalContainer = ({modal, swiperElRef, setModal, user, setPosts, address}) => {
  const [addPostDesc, setAddPostDesc] = useState('')
  const [uploadPhoto, setUploadPhoto] = useState([])

  return (
    <Modal
        isOpen={modal}
        style={customStyles}
    >
        <textarea 
            rows='4' 
            className = 'border w-full rounded-xl px-5 py-2.5' 
            onChange={(event) => setAddPostDesc(event.target.value)}
        />
        {uploadPhoto.length > 0 && <PostsModalSlide swiperElRef={swiperElRef} uploadPhoto={uploadPhoto} setUploadPhoto={setUploadPhoto} />}
        <PostsModalUpload setUploadPhoto={setUploadPhoto} />
        <PostsModalButtons setUploadPhoto={setUploadPhoto} setAddPostDesc={setAddPostDesc} setModal={setModal} uploadPhoto={uploadPhoto} addPostDesc={addPostDesc} user={user} setPosts={setPosts} address={address} />
    </Modal>
  )
}

export default PostsModalContainer