import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import Header from '../components/laylout/Header';
import { GiButterfly } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Login = () => {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

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
                    className='w-full border py-2.5 px-5 rounded-xl bg-basic-blue text-white text-bold shadow hover:shadow-xl hover:bg-hover-blue transition'
                >
                    로그인
                </button>
                <div className='flex w-full items-center gap-1 text-sm mt-5'>
                    <div className='grow h-px border-b'></div>
                    <div>또는</div>
                    <div className='grow h-px border-b'></div>
                </div>
                <div className='w-full flex flex-col mt-5 gap-3'>
                    <button className='flex items-center justify-evenly border px-5 py-2.5 rounded-xl shadow hover:shadow-xl transition'>
                        <FcGoogle /> 구글 로그인
                    </button>
                    <button className='flex items-center justify-evenly px-5 py-2.5 rounded-xl text-kakao-black bg-kakao-yellow shadow hover:shadow-xl hover:bg-kakao-hover transition'>
                        <RiKakaoTalkFill /> 카카오 로그인
                    </button>
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
    </div>
  )
}

export default Login