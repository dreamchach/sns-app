import React from 'react'
import { multifileupload } from '../../src/utill/functions/users'
import { MdFileUpload } from "react-icons/md";
import { stringUpload } from '../../src/utill/constant/constant';

const UsersUpload = ({setPostPhoto}) => {
  return (
    <div className='flex items-center gap-2.5 justify-center mt-12'>
        <label htmlFor='file'  className='bg-basic-blue hover:bg-hover-blue shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition text-white flex items-center gap-2.5'>
            <MdFileUpload /> {stringUpload}
        </label>
        <input multiple className='hidden' id='file' type='file' accept='image/*' onChange={(event) => multifileupload(event.target.files, setPostPhoto)}/>  
    </div>
  )
}

export default UsersUpload