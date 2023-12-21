import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/laylout/Header'
import { register } from 'swiper/element/bundle';
import { FaRegComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import Modal from 'react-modal'
import { MdFileUpload } from "react-icons/md";
import axios from 'axios';

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

const Post = () => {
    const swiperElRef = useRef(null);
    const [heart, setHeart] = useState(false)
    const [modal, setModal] = useState(false)
    const [uploadPhoto, setUploadPhoto] = useState([])
    const [files, setFiles] = useState([])

    const multifileupload = (files) => {
        let photo = []
        for(let file of files) {
          let reader = new FileReader()
    
          reader.onload = (data) => {
            photo.push(data.target.result)
            setUploadPhoto(photo)
            //setUserPhoto(data.target.result)
          }
    
          reader.readAsDataURL(file)
        } 
        setFiles(files)
    }

    const popupImage = (item) => {
        let array = uploadPhoto.filter((i) => i !== item)
        setUploadPhoto(array)
    }

    const onclick = async () => {
        console.log(files.length)
        const formData = new FormData()
        for(let i = 0; i < files.length; i += 1) {
            formData.append('files', files[i])
        }
        
        const config = {
          headers : {'Content-Type' : 'multipart/form-data'}
        }
        const res = await axios.post('http://localhost:4000/images', formData, config)
        console.log(res)
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
            {
                <div className='p-5 border-b mb-12'>
                    <div className='flex justify-between items-center gap-2.5'>
                        <div className='flex gap-2.5 items-center'>
                            <div className='w-12 h-12 border rounded-full'></div>
                            <div>
                                <div>UserNickName</div>
                                <div className='text-xs text-none-text'>UserId</div>
                            </div>
                        </div>
                        <div>date</div>                          
                    </div>
                    <div className='mt-12'>
                        <div>post write</div>
                        <div className='pt-12'>
                            {!modal && 
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
                onClick={() => setModal(true)}
            >
                <IoMdAdd />
            </div>
            {modal && 
                <Modal
                    isOpen={modal}
                    style={customStyles}
                >
                    <textarea rows='4' className='border w-full rounded-xl px-5 py-2.5' />
                    {uploadPhoto.length > 0 && 
                    <div className='mt-14 relative z-10 w-90vw'>
                        <swiper-container
                            ref={swiperElRef}
                            slides-per-view="1"
                            navigation="true"
                            pagination="true"
                        >
                            {uploadPhoto.map((item) => 
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
                    <div className='flex items-center gap-2.5 justify-center mt-12'>
                        <label htmlFor='file'  className='bg-basic-blue hover:bg-hover-blue shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition text-white flex items-center gap-2.5'>
                            <MdFileUpload /> 이미지 업로드
                        </label>
                        <input multiple className='hidden' id='file' type='file' accept='image/*' onChange={(event) => multifileupload(event.target.files)}/>  
                    </div>
                    <div className='flex justify-end mt-12 gap-5'>
                        <button 
                            className='bg-basic-blue hover:bg-hover-blue shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition text-white'
                            onClick={() => {
                                setUploadPhoto([])
                                onclick()
                            }}
                        >
                            저장
                        </button>
                        <button 
                            onClick={() => {
                                setUploadPhoto([])
                                setModal(false)
                            }}
                            className='bg-none-text hover:bg-none-button shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition'
                        >
                            취소
                        </button>
                    </div>
                </Modal>
            }
        </div>
    </div>
  )
}

export default Post