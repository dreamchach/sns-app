import React from 'react'
import { IoMdAdd } from 'react-icons/io'

const PostsAddButton = ({setModal}) => {
  return (
    <div 
      className='text-5xl text-white fixed bottom-12 left-8 bg-basic-blue rounded-full shadow-md hover:bg-hover-blue hover:shadow-2xl transition z-50'
      onClick={() => setModal(true)}
    >
      <IoMdAdd />
    </div>
  )
}

export default PostsAddButton