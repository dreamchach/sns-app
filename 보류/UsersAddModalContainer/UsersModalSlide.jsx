import React from 'react'
import { popupImage } from '../../src/utill/functions/posts'

const UsersModalSlide = ({swiperElRef, postPhoto, setPostPhoto}) => {
  return (
    <div className='mt-14 relative z-10 w-90vw'>
        <swiper-container
            ref={swiperElRef}
            slides-per-view="1"
            navigation="true"
            pagination="true"
        >
            {postPhoto.map((item) => 
                <swiper-slide key={item.view}>
                    <div
                        className='flex items-center justify-center'
                        onClick={() => popupImage(item.view, postPhoto, setPostPhoto)}
                    >
                        <img src={item.view} alt='post image' className='max-w-52 max-h-52 object-contain' />
                    </div>
                </swiper-slide>                       
            )}
        </swiper-container>
    </div>
  )
}

export default UsersModalSlide