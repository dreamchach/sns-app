import React, { useState } from 'react'
import PostEditImgSlideContent from './postEditImgSlideContent/PostEditImgSlideContent'
import PostFileUpload from './postFileUpload/PostFileUpload'
import PostEditButton from './postEditButton/PostEditButton'

const PostEditImgContent = ({swiperElRef, files, setFiles, editDesc, location, postDesc, setEditDesc, setPostEdit}) => {
  const [photoEdit, setPhotoEdit] = useState(false)
  const [photoChange, setPhotoChange] = useState(false)
  
  return (
    <div className='pt-12'>
        {files.length > 0 && <PostEditImgSlideContent swiperElRef={swiperElRef} files={files} setPhotoEdit={setPhotoEdit} setFiles={setFiles} />}
        <PostFileUpload setFiles={setFiles} setPhotoChange={setPhotoChange} setPhotoEdit={setPhotoEdit} />
        <PostEditButton setPostEdit={setPostEdit} editDesc={editDesc} location={location} postDesc={postDesc} setEditDesc={setEditDesc} photoEdit={photoEdit} photoChange={photoChange} setPhotoChange={setPhotoChange} files={files} setPhotoEdit={setPhotoEdit} />
    </div>
  )
}

export default PostEditImgContent