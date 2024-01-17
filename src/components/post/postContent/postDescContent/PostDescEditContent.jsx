import React, { useState } from 'react'
import { GoKebabHorizontal } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { postDel, postDescEditClick } from '../../../../utill/functions/post';
import { stringCorrection, stringDelete } from '../../../../utill/constant/constant';

const PostDescEditContent = ({postEdit, postAuthId, user, setPostEdit, location}) => {
    const navigate = useNavigate()
    const [openPostMenu, setOpenPostMenu] = useState(false)

    return (
        <div className='relative text-xl flex flex-col items-center '>
            {!postEdit && postAuthId === user.id &&
                <div onClick={() => setOpenPostMenu(!openPostMenu)}>
                    <GoKebabHorizontal />
                </div>
            }
            {openPostMenu &&
                <div className='absolute top-5 w-16 flex flex-col items-center text-base mt-2.5 rounded-xl bg-basic-blue shadow'>
                    <div 
                        className='w-full flex justify-center px-2.5 py-1 hover:bg-hover-blue rounded-xl transition'
                        onClick={() => postDescEditClick(setPostEdit, setOpenPostMenu)}
                    >
                        {stringCorrection}
                    </div>
                    <div 
                        className='w-full flex justify-center px-2.5 py-1 hover:bg-hover-blue rounded-xl transition'
                        onClick={() => postDel(location, navigate)}
                    >
                        {stringDelete}
                    </div>
                </div>
            }
        </div>  
    )
}

export default PostDescEditContent