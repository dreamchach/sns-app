import React from 'react'
import { baseApi } from '../../../utill/constant/constant'

const PostsOneContent = ({item, modal, userModal, swiperElRef}) => {
  return (
    <div className='mt-12'>
        <div>{item.description}</div>
        <div className='pt-12'>
            {!modal && !userModal &&
                <swiper-container
                    ref={swiperElRef}
                    slides-per-view="1"
                    navigation="true"
                    pagination="true"
                >
                    {item.images.map((i) => (
                        <swiper-slide key={i}>
                            <div className='flex items-center justify-center'>
                                <img className='max-h-600' src={`${baseApi}${i}`} alt={item.description || item.author.nickName} /> 
                            </div>
                        </swiper-slide>
                    ))}
                </swiper-container>
            }
        </div>
    </div>
  )
}

export default PostsOneContent