import React from 'react'
import { popupImage } from '../../../../../../utill/functions/post'

const PostEditImgSlideContent = ({swiperElRef, files, setPhotoEdit, setFiles}) => {
  return (
    <div className='pb-12'>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        navigation="true"
        pagination="true"
      >
        {files.map((item) => 
          <swiper-slide key={item.view}>
            <div className='flex items-center justify-center' onClick={() => popupImage(item.view, setPhotoEdit, files, setFiles)}>
              <img src={item.view} alt='post image' className='max-w-52 max-h-52 object-contain' />
            </div>
          </swiper-slide>
        )}
      </swiper-container>
    </div>
  )
}

export default PostEditImgSlideContent