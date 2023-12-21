import React, { useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import Header from '../components/laylout/Header';
import { GiButterfly } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken, setNickName, setPhoto, setUserId } from '../utill/redux/authSlice';
import Modal from 'react-modal'
import withAuth from '../components/withAuth';

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

const Login = () => {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const [googleToken, setGoogleToken] = useState('')
    const [loginDisabled, setLoginDisabled] = useState(true)
    const [error, setError] = useState('')
    const redirect_uri = 'http://localhost:3000/auth/kakao/callback'
    const Rest_api_key = 'e7fec73bc2273093bea2701b47d74583'
    const user = useSelector(state => state.auth)
    const navigate = useNavigate()
    console.log(user)

    useEffect(() => {
        if(id !== '' && password !== '') {
            setLoginDisabled(false)
        }else setLoginDisabled(true)
    }, [id, password])
    

    const dispatch = useDispatch()


const login = useGoogleLogin({
  onSuccess: tokenResponse => setGoogleToken(tokenResponse.access_token),
});

const localLogin = async () => {
    const data = {
        id,
        password
    }
    const res = await axios.post('http://localhost:4000/auth/login', data)
    if(typeof(res.data) !== 'string') {
        dispatch(setUserId(res.data.auth.id))
        dispatch(setNickName(res.data.auth.nickName))
        dispatch(setPhoto(res.data.auth.profilePhoto))
        dispatch(setAccessToken(res.data.accessToken))        
    }else setError(res.data)
}

useEffect(() => {
    const google = async () => {
        const res = await axios.post('http://localhost:4000/auth/google/login', {googleToken})
        dispatch(setUserId(res.data.auth.googleId))
        dispatch(setNickName(res.data.auth.nickName))
        dispatch(setPhoto(res.data.auth.profilePhoto))
        dispatch(setAccessToken(res.data.accessToken))
    }
    google()
}, [googleToken])

useEffect(() => {
if(user.accessToken !== '') {
    navigate('/posts')
}
}, [user])

  return (
    <div>
        <Header />
        <div className='h-90vh flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center text-2xl'>LOGIN</div>
            <div className='flex flex-col items-center justify-center mt-12 gap-2.5'>
                <input 
                    placeholder='아이디를 입력하세요' 
                    type='text' 
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                    className='border rounded-xl px-5 py-2.5'
                />
                <input 
                    placeholder='비밀번호를 입력하세요'
                    type='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className='border rounded-xl px-5 py-2.5'
                />
                <button
                    disabled={loginDisabled}
                    onClick={() => localLogin()}
                    className={`w-full border py-2.5 px-5 rounded-xl ${loginDisabled ? 'bg-none-button text-none-text' : 'bg-basic-blue text-white hover:shadow-xl hover:bg-hover-blue'} text-bold shadow transition`}
                >
                    로그인
                </button>
                <div className='flex w-full items-center gap-1 text-sm mt-5'>
                    <div className='grow h-px border-b'></div>
                    <div>또는</div>
                    <div className='grow h-px border-b'></div>
                </div>
                <div className='w-full flex flex-col mt-5 gap-3'>
                    <button 
                        onClick={() => login()}
                        className='flex items-center justify-evenly border px-5 py-2.5 rounded-xl shadow hover:shadow-xl transition'
                    >
                        <FcGoogle /> 구글 로그인
                    </button>
                    <Link to={`https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`}>
                        <button className='w-full flex items-center justify-evenly px-5 py-2.5 rounded-xl text-kakao-black bg-kakao-yellow shadow hover:shadow-xl hover:bg-kakao-hover transition'>
                            <RiKakaoTalkFill /> 카카오 로그인
                        </button>
                    </Link>
                    <Link to='/signup'>
                        <button
                            className='flex items-center justify-evenly w-full border py-2.5 px-5 rounded-xl bg-basic-blue text-white text-bold shadow hover:shadow-xl hover:bg-hover-blue transition'
                        >
                            <GiButterfly /> 회원가입
                        </button>
                    </Link>
                </div>
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

export default withAuth(Login)