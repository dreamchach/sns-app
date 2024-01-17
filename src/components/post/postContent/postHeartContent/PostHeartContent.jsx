import React from 'react'
import { clickHeart } from '../../../../utill/functions/post'
import { FaRegComment, FaHeart, FaRegHeart } from "react-icons/fa";

const PostHeartContent = ({setHeart, heart, setHeartLength, commentsLength, location, user, heartLength}) => {
    const postId = location.pathname.substring(6)
  return (
    <div className='flex justify-evenly mt-12'>
        <div 
            onClick={() => clickHeart(setHeart, heart, postId, user, setHeartLength)}
            className='flex items-center gap-2.5'
        >
            {heart ? 
                <div className='text-heart'>
                    <FaHeart />
                </div>
            :   <div>
                    <FaRegHeart />
                </div>
            }
            <div>{heartLength}</div>
        </div>
        <div className='flex items-center gap-2.5'>
            <div>
                <FaRegComment />
            </div>
            <div>{commentsLength}</div>
        </div>
    </div>
  )
}

export default PostHeartContent