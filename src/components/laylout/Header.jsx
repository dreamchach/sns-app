import React, { useState } from 'react'
import { GiButterfly } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Header = () => {
    const [Login, setLogin] = useState(false)
  return (
    <div className='flex justify-between items-center h-12 px-5 bg-basic-blue shadow'>
        <Link to='/posts'>
            <div className='flex items-center gap-2.5 text-white text-xl font-bold'>
                <GiButterfly />
                <div>MaumTweet</div>
            </div>
        </Link>
        {!Login &&
            <div className='flex flex-wrap items-center justify-center gap-5 text-white'>
                <Link to='/'>
                    <div 
                        className='hover:font-bold transition'
                        onClick={() => setLogin(true)}
                    >
                        로그인
                    </div>
                </Link>
                <Link to='/signup'>
                    <div className='hover:font-bold transition'>회원가입</div>
                </Link>
            </div>
        }
        {Login && 
            <div className='flex flex-wrap items-center justify-center gap-5 text-white'>
                <Link to='/posts'>
                    <div className='hover:font-bold transition'>포스트</div>
                </Link>
                <Link to='/friend#add'>
                    <div className='hover:font-bold transition'>친구</div>
                </Link>
                <Link to='/user'>
                    <div className='hover:font-bold transition'>홍길동</div>
                </Link>
                <div
                    className='hover:font-bold transition'
                    onClick={() => setLogin(false)}
                >로그아웃</div>
            </div>
        }
    </div>
  )
}

export default Header