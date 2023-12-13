import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/laylout/Header'
import { register } from 'swiper/element/bundle';
import { FaRegComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { GoKebabHorizontal } from "react-icons/go";
import { MdFileUpload } from "react-icons/md";

register();

const Post = () => {
    const swiperElRef = useRef(null);
    const [heart, setHeart] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const [edit, setEdit] = useState(true)
    const [files, setFiles] = useState([])

    const multifileupload = (files) => {
        let photo = []
        for(let file of files) {
          let reader = new FileReader()
    
          reader.onload = (data) => {
            photo.push(data.target.result)
            setFiles(photo)
            //setUserPhoto(data.target.result)
          }
    
          reader.readAsDataURL(file)
        } 
      }
      
      const popupImage = (item) => {
        console.log(item)
        let array = files.filter((i) => i !== item)
        setFiles(array)
      }

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
    <div>
        <Header />
        <div className='my-12 mx-5'>
            <div className='p-5 border-b mb-12'>
                    <div className='flex justify-between items-center gap-2.5'>
                        <div className='flex gap-2.5 items-center'>
                            <div className='w-12 h-12 border rounded-full'></div>
                            <div>
                                <div>UserNickName</div>
                                <div className='text-xs text-none-text'>UserId</div>
                            </div>
                        </div>
                        <div className='relative text-xl flex flex-col items-center '>
                            {!edit && 
                                <div onClick={() => setOpenMenu(!openMenu)}>
                                    <GoKebabHorizontal />
                                </div>
                            }
                            {openMenu &&
                                <div className='absolute top-5 w-16 flex flex-col items-center text-base mt-2.5 rounded-xl bg-basic-blue shadow'>
                                    <div className='w-full flex justify-center px-2.5 py-1 hover:bg-hover-blue rounded-xl transition'>수정</div>
                                    <div className='w-full flex justify-center px-2.5 py-1 hover:bg-hover-blue rounded-xl transition'>삭제</div>
                                </div>
                            }
                        </div>                          
                    </div>
                <div className='mt-12'>
                    {!edit && <div>post write</div>}
                    {edit && <textarea rows='4' className='border w-full rounded-xl px-5 py-2.5' />}
                    {!edit && 
                        <div className='pt-12'>
                            <swiper-container
                                ref={swiperElRef}
                                slides-per-view="1"
                                navigation="true"
                                pagination="true"
                            >
                                <swiper-slide>Slide 1</swiper-slide>
                                <swiper-slide>Slide 2</swiper-slide>
                                <swiper-slide>Slide 3</swiper-slide>
                            </swiper-container>
                        </div>
                    }
                    {edit &&
                        <div className='pt-12'>
                            {files.length > 0 && 
                                <div className='pb-12'>
                                    <swiper-container
                                        ref={swiperElRef}
                                        slides-per-view="1"
                                        navigation="true"
                                        pagination="true"
                                    >
                            {files.map((item) => 
                              <swiper-slide>
                                <div 
                                    className='flex items-center justify-center'
                                    onClick={() => popupImage(item)}
                                >
                                  <img src={item} alt='post image' className='max-w-52 max-h-52 object-contain' />
                                </div>
                              </swiper-slide>
                            )}
                                    </swiper-container>
                                </div>
                            }
                            <div className='flex items-center gap-2.5 justify-center'>
                                <label htmlFor='file'  className='bg-basic-blue hover:bg-hover-blue shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition text-white flex items-center gap-2.5'>
                                    <MdFileUpload /> 이미지 업로드
                                </label>
                                <input multiple onChange={(event) => multifileupload(event.target.files)} className='hidden' id='file' type='file' accept='image/*' />  
                            </div>
                            <div className='flex justify-end'>
                                <button className='bg-basic-blue hover:bg-hover-blue shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition text-white'>수정</button>
                            </div>
                        </div>
                    }
                    <div className='flex items-center gap-1 mt-5 text-xs'>
                        <div>Date</div>
                        <LuDot />
                        <div>Time</div>
                    </div>
                </div>
                <div className='flex justify-evenly mt-12'>
                    <div 
                        onClick={() => setHeart(!heart)}
                        className='flex items-center gap-2.5'
                    >
                        {heart ? 
                            <div className='text-heart'>
                                <FaHeart />
                            </div>
                        :   <div>
                                <FaRegHeart />
                            </div>
                        }
                        <div>heartNum</div>
                    </div>
                    <div className='flex items-center gap-2.5'>
                        <div>
                            <FaRegComment />
                        </div>
                        <div>commentNum</div>
                    </div>
                </div>
            </div>
            <div>
                {
                    <div className='mb-12 px-5'>
                    <div className='flex justify-between items-center gap-2.5'>
                        <div className='flex gap-2.5 items-center'>
                            <div className='w-12 h-12 border rounded-full'></div>
                            <div className='flex flex-col'>
                                <div className='flex gap-1 items-center'>
                                    <div>UserNickName</div>
                                    <div>
                                        <LuDot />
                                    </div>
                                    <div className='text-none-text'>fromTime</div>
                                </div>
                                <div className='text-xs text-none-text'>UserId</div>
                            </div>
                        </div>
                        {!edit && 
                            <div className='relative text-xl flex flex-col items-center '>
                                <div onClick={() => setOpenMenu(!openMenu)}>
                                    <GoKebabHorizontal />
                                </div>
                                {openMenu &&
                                    <div className='absolute top-5 w-16 flex flex-col items-center text-base mt-2.5 rounded-xl bg-basic-blue shadow'>
                                        <div className='w-full flex justify-center px-2.5 py-1 hover:bg-hover-blue rounded-xl transition'>수정</div>
                                        <div className='w-full flex justify-center px-2.5 py-1 hover:bg-hover-blue rounded-xl transition'>삭제</div>
                                    </div>
                                }
                            </div>
                        }                         
                    </div>
                        {!edit && <div className='mt-12'>comment</div>}
                        {edit && 
                            <div>
                                <textarea rows='4' className='mt-12 border w-full rounded-xl px-5 py-2.5' />
                                <div className='flex justify-end'>
                                    <button className='bg-basic-blue hover:bg-hover-blue shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition text-white'>수정</button>
                                </div>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Post