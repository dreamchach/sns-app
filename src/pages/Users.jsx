import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/laylout/Header'
import { GoKebabHorizontal } from "react-icons/go";
import { register } from 'swiper/element/bundle';
import { FaRegComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import Modal from 'react-modal'
import { MdFileUpload } from "react-icons/md";

register();

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
    },
  };

const Users = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const swiperElRef = useRef(null);
  const [heart, setHeart] = useState(false)
  const [postModal, setPostModal] = useState(false)
  const [userModal, setUserModal] = useState(false)
  const [nickname, setNickname] = useState('')

  const fileupload = (file) => {
    const formData = new FormData()
    formData.append('file', file[0])
    console.log(formData)
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
        <div className='mt-12 my-5'>
          <div className='flex justify-between items-center gap-2.5 px-5'>
            <div className='flex gap-2.5 items-center'>
              <div className='w-12 h-12 border rounded-full'></div>
              <div>
                <div>UserNickName</div>
                <div className='text-xs'>UserId</div>
              </div>
            </div>
            <div className='relative text-xl flex flex-col items-center'>
              <div
                className='relative right-16' 
                onClick={() => setOpenMenu(!openMenu)}
              >
                <GoKebabHorizontal />
              </div>                            
              {openMenu &&
                <div className='right-0 absolute top-5 w-16 flex flex-col items-center text-base mt-2.5 rounded-xl bg-basic-blue shadow w-40 '>
                  <div
                    onClick={() => setUserModal(true)}
                    className='w-full flex justify-center px-2.5 py-1 hover:bg-hover-blue rounded-xl transition'
                  >
                    프로필 변경
                  </div>
                </div>
              }
            </div>
            {userModal && 
              <Modal
                isOpen={userModal}
                style={customStyles}
              >
            <div className='flex flex-col items-center justify-center mt-12 gap-2.5'>
              <div className='w-52 h-52 border rounded-full'></div>
              <div>
                <label htmlFor='file' className='bg-basic-blue hover:bg-hover-blue shadow hover:shadow-xl px-2.5 py-1 rounded text-white relative bottom-8 left-14'>Edit</label>
                <input className='hidden' id='file' type='file' accept='image/*' onChange={(event) => fileupload(event.target.files)}/>  
              </div>
              <input 
                placeholder='닉네임을 입력하세요' 
                type='text' 
                value={nickname}
                onChange={(event) => setNickname(event.target.value)}
                className='border rounded-xl px-5 py-2.5'
              />
              <button
                className='w-full border py-2.5 px-5 rounded-xl bg-basic-blue text-white text-bold shadow hover:shadow-xl hover:bg-hover-blue transition'
              >
                수정
              </button>
              <button
                onClick={() => setUserModal(false)}
                className='w-full border py-2.5 px-5 rounded-xl bg-none-text text-bold shadow hover:shadow-xl hover:bg-none-button transition'
              >
                취소
              </button>
            </div>
              </Modal>
            }                          
          </div>
          <div className='my-12 mx-5'>
            {
                <div className='p-5 border-b mb-12'>
                    <div className='flex justify-between items-center gap-2.5'>
                        <div className='flex gap-2.5 items-center'>
                            <div className='w-12 h-12 border rounded-full'></div>
                            <div>
                                <div>UserNickName</div>
                                <div className='text-xs'>UserId</div>
                            </div>
                        </div>
                        <div>date</div>                          
                    </div>
                    <div className='mt-12'>
                        <div>post write</div>
                        <div className='pt-12'>
                            {!postModal && !userModal &&
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
                            }
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
            }
            <div 
                className='text-5xl text-white fixed bottom-12 left-8 bg-basic-blue rounded-full shadow-md hover:bg-hover-blue hover:shadow-2xl transition'
                onClick={() => setPostModal(true)}
            >
                <IoMdAdd />
            </div>
            {postModal && 
                <Modal
                    isOpen={postModal}
                    style={customStyles}
                >
                    <textarea rows='4' className='border w-full rounded-xl px-5 py-2.5' />
                    <div className='mt-14 relative z-10 w-90vw'>
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
                    <div className='flex items-center gap-2.5 justify-center mt-12'>
                        <label htmlFor='file'  className='bg-basic-blue hover:bg-hover-blue shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition text-white flex items-center gap-2.5'>
                            <MdFileUpload /> 이미지 업로드
                        </label>
                        <input className='hidden' id='file' type='file' accept='image/*' />  
                    </div>
                    <div className='flex justify-end mt-12 gap-5'>
                        <button className='bg-basic-blue hover:bg-hover-blue shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition text-white'>저장</button>
                        <button 
                            onClick={() => setPostModal(false)}
                            className='bg-none-text hover:bg-none-button shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition'
                        >
                            취소
                        </button>
                    </div>
                </Modal>
            }
        </div>
        </div>
    </div>
  )
}

export default Users