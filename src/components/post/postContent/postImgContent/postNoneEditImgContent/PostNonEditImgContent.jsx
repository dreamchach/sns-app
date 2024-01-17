import React from 'react'

const PostNonEditImgContent = ({swiperElRef, files, post}) => {
    return (
        <div className='pt-12'>
            <swiper-container
                ref={swiperElRef}
                slides-per-view="1"
                navigation="true"
                pagination="true"
            >
                {files.map((item) => 
                    <swiper-slide key={item.view}>
                        <div className='flex items-center justify-center'>
                            <img src={item.view} alt={post.description} />
                        </div>
                    </swiper-slide>
                )}
            </swiper-container>
        </div>
    )
}

export default PostNonEditImgContent