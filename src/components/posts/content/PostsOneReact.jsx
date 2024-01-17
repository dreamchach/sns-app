import React from 'react'
import { FaHeart, FaRegComment, FaRegHeart } from 'react-icons/fa'
import { like } from '../../../utill/functions/posts'

const PostsOneReact = ({item, user, posts, setPosts}) => {
  return (
    <div className='flex justify-evenly mt-12'>
        <div 
            onClick={() => like(item._id, user, posts, setPosts)}
            className='flex items-center gap-2.5'
        >
            {item.likes.includes(user.id) ? 
                <div className='text-heart'>
                    <FaHeart />
                </div>
            :   <div>
                    <FaRegHeart />
                </div>
            }
            <div>{item.likes.length}</div>
        </div>
        <div className='flex items-center gap-2.5'>
            <div>
                <FaRegComment />
            </div>
            <div>{item.comments}</div>
        </div>
    </div>
  )
}

export default PostsOneReact