import React from 'react'
import { postEditClick } from '../../../../../../utill/functions/post'
import { stringCorrection } from '../../../../../../utill/constant/constant'

const PostEditButton = ({setPostEdit, editDesc, location, postDesc, setEditDesc, photoEdit, photoChange, setPhotoChange, files, setPhotoEdit}) => {
  return (
    <div className='flex justify-end'>
        <button 
            className='bg-basic-blue hover:bg-hover-blue shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition text-white'
            onClick={() => postEditClick(setPostEdit, editDesc, location, postDesc, setEditDesc, photoEdit, photoChange, setPhotoChange, files, setPhotoEdit)}
        >
            {stringCorrection}
        </button>
    </div>
  )
}

export default PostEditButton