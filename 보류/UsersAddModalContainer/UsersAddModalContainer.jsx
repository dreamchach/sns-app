import React, { useState } from 'react'
import UsersModalSlide from './UsersModalSlide'
import UsersUpload from './UsersUpload'
import UsersModalButtons from './UsersModalButtons'
import { customStyles } from '../../src/utill/modal/custom'
import Modal from 'react-modal'

const UsersAddModalContainer = ({setPostModal, user, setPosts, postModal, swiperElRef}) => {
  const [postPhoto, setPostPhoto] = useState([])
  const [addPostDesc, setAddPostDesc] = useState('')

  return (
    <Modal
        isOpen={postModal}
        style={customStyles}
    >
        <textarea 
            rows='4' 
            className = 'border w-full rounded-xl px-5 py-2.5' 
            onChange={(event) => setAddPostDesc(event.target.value)}
        />
        {postPhoto.length > 0 && <UsersModalSlide swiperElRef={swiperElRef} postPhoto={postPhoto} setPostPhoto={setPostPhoto} />}
        <UsersUpload setPostPhoto={setPostPhoto} />
        <UsersModalButtons setPostPhoto={setPostPhoto} setAddPostDesc={setAddPostDesc} setPostModal={setPostModal} postPhoto={postPhoto} addPostDesc={addPostDesc} user={user} setPosts={setPosts} />
    </Modal>
  )
}

export default UsersAddModalContainer