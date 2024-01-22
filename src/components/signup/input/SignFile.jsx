import React from 'react'
import { fileupload } from '../../../utill/functions/signup'
import { stringEdit } from '../../../utill/constant/constant'

const SignFile = ({setFile, setPhotoFile, formData}) => {
  return (
    <div>
        <label htmlFor='file' className='bg-basic-blue hover:bg-hover-blue shadow hover:shadow-xl px-2.5 py-1 rounded text-white relative bottom-8 left-14'>
          {stringEdit}
        </label>
        <input className='hidden' id='file' type='file' accept='image/*' onChange={(event) => fileupload(event.target.files, setFile, setPhotoFile)}/>  
    </div>
  )
}

export default SignFile