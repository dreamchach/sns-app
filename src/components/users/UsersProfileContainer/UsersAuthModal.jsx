import React, { useState } from 'react'
import { fileupload, saveProfile } from '../../../utill/functions/users'
import { useDispatch } from 'react-redux'
import Modal from 'react-modal'
import { customStyles } from '../../../utill/modal/custom'
import { altProfile, nicknameInput, stringCancel, stringCorrection, typeText } from '../../../utill/constant/constant'
import SignPhoto from '../../signup/input/SignPhoto'
import SignFile from '../../signup/input/SignFile'

const UsersAuthModal = ({userModal, userPhoto, nickname, setNickname, setUserModal, setUserPhoto, user}) => {
    const [file, setFile] = useState({})
    const dispatch = useDispatch()

  return (
    <Modal
        isOpen={userModal}
        style={customStyles}
    >
        <div className='flex flex-col items-center justify-center mt-12 gap-2.5'>
            <SignPhoto photo={userPhoto} />
            <SignFile setFile={setFile} setPhotoFile={setUserPhoto} />
            <input 
                placeholder={nicknameInput}
                type={typeText}
                value={nickname}
                onChange={(event) => setNickname(event.target.value)}
                className='border rounded-xl px-5 py-2.5'
            />
            <button
                onClick={() => {
                    setUserModal(false)
                    saveProfile(file, user, dispatch, nickname)
                }}
                className='w-full border py-2.5 px-5 rounded-xl bg-basic-blue text-white text-bold shadow hover:shadow-xl hover:bg-hover-blue transition'
            >
                {stringCorrection}
            </button>
            <button
                onClick={() => {
                    setUserModal(false)
                    setUserPhoto(user.profilePhoto)
                }}
                className='w-full border py-2.5 px-5 rounded-xl bg-none-text text-bold shadow hover:shadow-xl hover:bg-none-button transition'
            >
                {stringCancel}
            </button>
        </div>
    </Modal>
  )
}

export default UsersAuthModal