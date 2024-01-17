import React from 'react'
import { baseApi } from '../src/utill/constant/constant'

const UsersPostDesc = ({item, postModal, userModal, swiperElRef}) => {
  return (
    <div className='mt-12'>
        <div>{item.description}</div>
        <div className='pt-12'>
            {!postModal && !userModal && 
                <swiper-container
                    ref={swiperElRef}
                    slides-per-view="1"
                    navigation="true"
                    pagination="true"
                >
                    {item.images.map((i) => 
                    <swiper-slide key={i}>
                        <div className='flex items-center justify-center'>
                            <img src={`${baseApi}${i}`} alt={item.description} />
                        </div>
                    </swiper-slide>
                    )}
                </swiper-container>
            }
        </div>
    </div>
  )
}

export default UsersPostDesc