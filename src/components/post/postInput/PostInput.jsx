import React, { useState } from 'react'
import { clickAddComment, pressAddComment } from '../../../utill/functions/post'
import { stringSend } from '../../../utill/constant/constant'

const PostInput = ({user, location, setComments, setCommentsLength, commentsLength}) => {
  const [commentInput, setCommentInput] = useState('')
  
  return (
    <div className='gap-1 fixed bottom-0 z-50 w-full bg-basic-blue left-0 flex items-center justify-center p-1 shadow'>
      <input 
          type='text' 
          className='px-5 py-2.5 w-full rounded' 
          onKeyUp={(event) => pressAddComment(event.key, commentInput, user, location, setComments, setCommentsLength, setCommentInput, commentsLength)}
          onChange={(event) => setCommentInput(event.target.value)}
          value={commentInput}
      />
      <button 
          className='px-5 py-2.5 shrink-0 hover:text-white hover:bg-hover-blue rounded transition'
          onClick={() => clickAddComment(commentInput, user, location, setComments, setCommentsLength, setCommentInput, commentsLength)}
      >
        {stringSend}
      </button>
    </div>
  )
}

export default PostInput