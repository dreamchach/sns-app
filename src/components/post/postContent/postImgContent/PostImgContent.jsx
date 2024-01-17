import React, { useEffect, useRef, useState } from 'react'
import PostNonEditImgContent from './postNoneEditImgContent/PostNonEditImgContent'
import { register } from 'swiper/element/bundle';
import PostEditImgContent from './postEditImgContent/PostEditImgContent';
import { textChange } from '../../../../utill/functions/post';

register();

const PostImgContent = ({postEdit, postDesc, files, post, setPostDesc, setFiles, location, setPostEdit}) => {
    const [editDesc, setEditDesc] = useState(false)
    const swiperElRef = useRef(null);
    useEffect(() => {
        if(swiperElRef.current !== null) {
            // listen for Swiper events using addEventListener
            swiperElRef.current.addEventListener('swiperprogress', (e) => {
                const [swiper, progress] = e.detail;
                console.log(progress);
            });
        
            swiperElRef.current.addEventListener('swiperslidechange', (e) => {
                console.log('slide changed');
            });
        }
    }, []);

    return (
        <div className='mt-12'>
            {!postEdit && <div>{postDesc}</div>}
            {postEdit && 
                <textarea rows='4' className='border w-full rounded-xl px-5 py-2.5' value={postDesc} onChange={(event) => textChange(event, setPostDesc, setEditDesc)} />
            }
            {!postEdit && <PostNonEditImgContent swiperElRef={swiperElRef} files={files} post={post} />}
            {postEdit && <PostEditImgContent swiperElRef={swiperElRef} files={files} setFiles={setFiles} editDesc={editDesc} location={location} postDesc={postDesc} setEditDesc={setEditDesc} setPostEdit={setPostEdit} />}
            <div className='flex items-center gap-1 mt-5 text-xs'>
                <div>{post.date}</div>
            </div>
        </div>
    )
}

export default PostImgContent