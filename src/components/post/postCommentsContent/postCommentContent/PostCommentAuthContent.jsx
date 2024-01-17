import React from 'react'
import { LuDot } from "react-icons/lu";

const PostCommentAuthContent = ({item}) => {
  return (
    <div className='flex gap-2.5 items-center'>
        <div className='w-12 h-12 border rounded-full overflow-hidden'>
            <img src={item.author.profilePhoto} alt={item.author.nickName} />
        </div>
        <div className='flex flex-col'>
            <div className='flex gap-1 items-center'>
                <div>{item.author.nickName}</div>
                <div>
                    <LuDot />
                </div>
                <div className='text-none-text text-xs'>{item.date}</div>
            </div>
            <div className='text-xs text-none-text'>{item.author.id}</div>
        </div>
    </div>
  )
}

export default PostCommentAuthContent