import React, { useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import { GiButterfly } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { addressSignup, callbackKakao, stringGoogleSocialLogin, stringKakaoSocialLogin, stringSignup } from '../../../utill/constant/constant';
import { google } from '../../../utill/functions/login'

const Buttons = () => {
    const [googleToken, setGoogleToken] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        google(googleToken, dispatch)
    }, [googleToken])

    const login = useGoogleLogin({
        onSuccess: tokenResponse => setGoogleToken(tokenResponse.access_token),
    })

    

    return (
        <div className='w-full flex flex-col mt-5 gap-3'>
            <button 
                onClick={() => login()}
                className='flex items-center justify-evenly border px-5 py-2.5 rounded-xl shadow hover:shadow-xl transition'
            >
                <FcGoogle /> {stringGoogleSocialLogin}
            </button>
            <Link to={addressSignup}>
                <button
                    className='flex items-center justify-evenly w-full border py-2.5 px-5 rounded-xl bg-basic-blue text-white text-bold shadow hover:shadow-xl hover:bg-hover-blue transition'
                >
                    <GiButterfly /> {stringSignup}
                </button>
            </Link>
        </div>
    )
}

export default Buttons
