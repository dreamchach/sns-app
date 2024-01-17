import React, { useState } from 'react'
import { GoKebabHorizontal } from "react-icons/go";
import { delComment, onclick } from '../../../../utill/functions/post';
import { stringCorrection, stringDelete } from '../../../../utill/constant/constant';

const PostCommentMenuContent = ({setCommentEdit, comments, item, setComments, setCommentsLength, commentsLength}) => {
    const [openCommentMenu, setOpenCommentMenu] = useState(false)

    return (
        <div className='relative text-xl flex flex-col items-center '>
            <div onClick={() => setOpenCommentMenu(!openCommentMenu)}>
                <GoKebabHorizontal />
            </div>
            {openCommentMenu &&
                <div className='absolute top-5 w-16 flex flex-col items-center text-base mt-2.5 rounded-xl bg-basic-blue shadow'>
                    <div 
                        className='w-full flex justify-center px-2.5 py-1 hover:bg-hover-blue rounded-xl transition'
                        onClick={() => onclick(setCommentEdit, setOpenCommentMenu)}
                    >
                        {stringCorrection}
                    </div>
                    <div 
                        className='w-full flex justify-center px-2.5 py-1 hover:bg-hover-blue rounded-xl transition'
                        onClick={() => delComment(comments, item._id, setComments, setOpenCommentMenu, setCommentsLength, commentsLength)}
                    >
                        {stringDelete}
                    </div>
                </div>
            }
        </div>
    )
}

export default PostCommentMenuContent