import React from 'react'
import { oncancel, onsave } from '../../src/utill/functions/posts'
import { stringCancel, stringSave } from '../../src/utill/constant/constant'

const UsersModalButtons = ({setPostPhoto, setAddPostDesc, setPostModal, postPhoto, addPostDesc, user, setPosts}) => {
  return (
    <div className='flex justify-end mt-12 gap-5'>
        <button 
            onClick={() => onsave(setPostPhoto, setAddPostDesc, setPostModal, postPhoto, addPostDesc, user, setPosts, '/user/add')}
            className='bg-basic-blue hover:bg-hover-blue shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition text-white'
        >
            {stringSave}
        </button>
        <button 
            onClick={() => oncancel(setPostPhoto, setAddPostDesc, setPostModal)}
            className='bg-none-text hover:bg-none-button shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition'
        >
            {stringCancel}
        </button>
    </div>
  )
}

export default UsersModalButtons