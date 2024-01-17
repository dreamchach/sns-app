import React from 'react'
import { oncancel, onsave } from '../../../utill/functions/posts'
import { stringCancel, stringSave } from '../../../utill/constant/constant'

const PostsModalButtons = ({setUploadPhoto, setAddPostDesc, setModal, uploadPhoto, addPostDesc, user, setPosts, address}) => {
  return (
    <div className='flex justify-end mt-12 gap-5'>
        <button 
            className='bg-basic-blue hover:bg-hover-blue shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition text-white'
            onClick={() => onsave(setUploadPhoto, setAddPostDesc, setModal, uploadPhoto, addPostDesc, user, setPosts, address)}
        >
            {stringSave}
        </button>
        <button 
            onClick={() => oncancel(setUploadPhoto, setAddPostDesc, setModal)}
            className='bg-none-text hover:bg-none-button shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition'
        >
            {stringCancel}
        </button>
    </div>
  )
}

export default PostsModalButtons