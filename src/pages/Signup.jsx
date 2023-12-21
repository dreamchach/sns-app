import React, { useEffect, useState } from 'react'
import Header from '../components/laylout/Header'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setAccessToken, setNickName, setPhoto, setUserId } from '../utill/redux/authSlice'
import Modal from 'react-modal'
import withNoneAuth from '../components/withNoneAuth'

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

const Signup = () => {
  const [nickname, setNickname] = useState('')
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [photo, setPhotoFile] = useState('')
  const [file, setFile] = useState({})
  const [error, setError] = useState('')
  const [signDisabled, setSignDisabled] = useState(true)
  const user = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const fileupload = async (file) => {
    let reader = new FileReader()
    reader.onload = (data) => {
      setPhotoFile(data.target.result)
    }
    reader.readAsDataURL(file[0])
    setFile(file)
  }

  const onclick = async () => {
    const formData = new FormData()
    formData.append('file', file[0])

    const config = {
      headers : {'Content-Type' : 'multipart/form-data'}
    }
    const res = await axios.post('http://localhost:4000/image', formData, config)
    console.log(res.data.fileName)
    const data = {
      id,
      password,
      nickName : nickname,
      profilePhoto : `http://localhost:4000/${res.data.fileName}`
    }
    const sign = await axios.post('http://localhost:4000/auth/signup', data)
    if(typeof(sign.data) !== 'string') {
      dispatch(setUserId(sign.data.auth.id))
      dispatch(setNickName(sign.data.auth.nickName))
      dispatch(setPhoto(sign.data.auth.profilePhoto))
      dispatch(setAccessToken(sign.data.accessToken))      
    }else setError(sign.data)
  }

  useEffect(() => {
    if(user.accessToken !== '') {
        navigate('/posts')
    }
    }, [user])

    useEffect(() => {
      console.log(password.length > 8)
      if(id !== '' && password !== '' && nickname !== '' && photo !== '') {
        if(password.length >= 8) {
          setSignDisabled(false)
        }else setSignDisabled(true)
      }else setSignDisabled(true)
  }, [id, password, nickname, photo])

  return (
    <div>
        <Header />
        <div className='h-90vh flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center text-2xl'>SIGN UP</div>
            <div className='flex flex-col items-center justify-center mt-12 gap-2.5'>
              <div className='w-52 h-52 border rounded-full overflow-hidden flex items-center justify-center'>
                {photo !== '' && <img src={photo} alt='프로필 사진'/>}
              </div>
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
              <input 
                placeholder='아이디를 입력하세요' 
                type='text' 
                value={id}
                onChange={(event) => setId(event.target.value)}
                className='border rounded-xl px-5 py-2.5'
              />
              <input 
                placeholder='8자리 이상 비밀번호를 입력하세요'
                type='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className='border rounded-xl px-5 py-2.5'
              />
              <button
                onClick={() => onclick()}
                disabled={signDisabled}
                className={`${signDisabled ? 'bg-none-button text-none-text' : 'bg-basic-blue text-white hover:shadow-xl hover:bg-hover-blue'} w-full border py-2.5 px-5 rounded-xl text-bold shadow transition`}
              >
                회원가입
              </button>
            </div>
        </div>
        {error !== '' && 
                <Modal
                    isOpen={error !== ''}
                    style={customStyles}
                >
                    <div className='flex items-center flex-col justify-center gap-5'>
                        <div>{error}</div>
                        <div>
                            <button 
                                onClick={() => setError('')}
                                className='bg-basic-blue hover:bg-hover-blue shadow hover:shadow-xl px-5 py-2.5 rounded-xl mt-2.5 transition text-white'
                            >
                                확인
                            </button>
                        </div>
                    </div>
                </Modal>
            }
    </div>
  )
}

export default withNoneAuth(Signup)