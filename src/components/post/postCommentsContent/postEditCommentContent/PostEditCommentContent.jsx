import React from 'react'
import { editComment } from '../../../../utill/functions/post'
import { stringCorrection } from '../../../../utill/constant/constant'

const PostEditCommentContent = ({commentText, setCommentText, item, setCommentEdit}) => {
    return (
        <div>
            <textarea 
                rows='4' 
                className='mt-12 border w-full rounded-xl px-5 py-2.5' 
                value={commentText}
                onChange={(event) => setCommentText(event.target.value)}
            />
            <div className='flex justify-end'>
                <button 
                    className='bg-basic-blue hover:bg-hover-blue shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition text-white'
                    onClick={() => editComment(item, commentText, setCommentEdit)}
                >
                    {stringCorrection}
                </button>
            </div>
        </div>
    )
}

export default PostEditCommentContent